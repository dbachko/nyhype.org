/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const slugify = require('@sindresorhus/slugify')

// Create product title from it's fields.
const createTitle = ({ Brand, Name, Color, Size }) =>
  `${Brand.join(' × ')} ${Name} ${Color} ${Size}`

// Create product slug from it's title.
const createSlug = (title) => `/product/${slugify(title)}/`

exports.onCreateNode = async ({
  node,
  actions,
  createNodeId,
  store,
  cache,
}) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Airtable') {
    const { data } = node
    const fieldsMap = new Map([
      ['Brand', 'brand'],
      ['Color', 'color'],
      ['Description', 'desc'],
      ['In_Stock', 'inStock'],
      ['Name', 'name'],
      ['Price', 'price'],
      ['Season', 'season'],
      ['Size', 'size'],
    ])
    for (let [key, val] of fieldsMap.entries()) {
      if (data.hasOwnProperty(key)) {
        // Generate appropriate field.
        await createNodeField({
          node,
          name: val,
          value: data[key],
        })
      }
    }
    // Generate cover field.
    createNodeField({
      node,
      name: 'cover',
      value: data.Cover[0],
    })
    // Generate title field.
    const title = createTitle(node.data)
    createNodeField({
      node,
      name: 'title',
      value: title,
    })
    // Generate slug field.
    const slug = createSlug(title)
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  try {
    // Use a simple query to check if Airtable plugin is installed
    const checkAirtable = await graphql(`
      query {
        __schema {
          types {
            name
          }
        }
      }
    `)

    const hasAirtableType = checkAirtable.data.__schema.types.some(
      (type) => type.name === 'Airtable' || type.name === 'AirtableConnection'
    )

    if (!hasAirtableType) {
      console.log(
        'Airtable plugin is not installed or configured, skipping product page creation'
      )
      return
    }

    try {
      const result = await graphql(`
        {
          allAirtable {
            edges {
              node {
                id
                fields {
                  brand
                  color
                  desc
                  inStock
                  name
                  price
                  season
                  size
                  slug
                  title
                  cover {
                    thumbnails {
                      small {
                        url
                      }
                      large {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `)

      if (result.errors) {
        console.error('Error querying Airtable data:', result.errors)
        return
      }

      if (result.data && result.data.allAirtable) {
        const products = result.data.allAirtable.edges.map((edge) => edge.node)
        const productTpl = path.resolve('./src/templates/product-template.js')
        const productTplAmp = path.resolve(
          './src/templates/product-template.amp.js'
        )

        // Create a page for each product.
        for (let { id, fields } of products) {
          // Create regular product page.
          await createPage({
            path: fields.slug,
            component: productTpl,
            context: { id, fields },
          })

          // Create amp version of a product page.
          await createPage({
            path: `${fields.slug}amp/`,
            component: productTplAmp,
            context: { id, fields },
          })
        }
      }
    } catch (innerError) {
      console.log('Error in Airtable query:', innerError.message)
    }
  } catch (error) {
    console.error('Error in createPages:', error)
  }
}
