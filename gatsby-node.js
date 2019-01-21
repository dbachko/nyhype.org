/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const slugify = require('@sindresorhus/slugify')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allAirtable {
            edges {
              node {
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
              }
            }
          }
        }
      `).then(result => {
        if (result.error) {
          reject(result.error)
        }
        const products = result.data.allAirtable.edges.map(edge => edge.node)
        // Create a page for each product.
        products.forEach(({ data }) => {
          // Generate slug from product props.
          const slug = slugify(
            `${data.Brand.join('-')}-${data.Name}-${
              data.Color
            }-${data.Size.join('-')}`
          )
          // Create regular product page.
          createPage({
            path: `/product/${slug}/`,
            component: path.resolve('./src/templates/product-template.js'),
            context: { data },
          })
          // Create amp optimized product page.
          createPage({
            path: `/product/${slug}/amp/`,
            component: path.resolve('./src/templates/product-template.amp.js'),
            context: { data },
          })
        })
      })
    )
  })
}
