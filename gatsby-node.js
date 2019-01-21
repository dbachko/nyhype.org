/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const slugify = require('@sindresorhus/slugify');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const productTemplate = path.resolve('./src/templates/product-template.js')
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
          const slug = slugify(`${data.Brand.join('-')}-${data.Name}-${data.Color}-${data.Size.join('-')}`)
          createPage({
            path: `/product/${slug}/`,
            component: productTemplate,
            context: { data },
          })
        })
      })
    )
  })
}
