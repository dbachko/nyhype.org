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
const createSlug = title => `/product/${slugify(title)}/`

exports.onCreateNode = async ({
  node,
  actions,
  createNodeId,
  store,
  cache,
}) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Airtable') {
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
  const productTemplate = path.resolve('./src/templates/product-template.js')
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allAirtable {
            edges {
              node {
                id
                data {
                  Brand
                  Color
                  Name
                  Size
                  Cover {
                    thumbnails {
                      large {
                        url
                      }
                    }
                  }
                }
                fields {
                  slug
                  title
                }
              }
            }
          }
        }
      `).then(async result => {
        if (result.error) {
          reject(result.error)
        }
        const products = result.data.allAirtable.edges.map(edge => edge.node)
        // Create a page for each product.
        for (let product of products) {
          const {
            id,
            data,
            fields: { slug, title },
          } = product
          // Create regular product page.
          await createPage({
            path: slug,
            component: productTemplate,
            context: { id, data, slug, title },
          })
        }
      })
    )
  })
}
