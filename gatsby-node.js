/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const slugify = require('@sindresorhus/slugify')

exports.onCreateNode = async ({
  node,
  actions,
  createNodeId,
  store,
  cache,
}) => {
  const { createNodeField, createNode } = actions
  if (node.internal.type === 'Airtable') {
    const images = node.data.Cover
    // Create local version of all cover images.
    for (let { url } of images) {
      try {
        const fileNode = await createRemoteFileNode({
          url,
          store,
          cache,
          createNode,
          createNodeId,
        })
        createNodeField({
          node,
          name: 'localFile___NODE',
          value: fileNode.id,
        })
      } catch (e) {
        console.error('Error creating local files: ', e)
      }
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
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
                  Price
                  Season
                  Size
                }
                fields {
                  localFile {
                    publicURL
                    childImageSharp {
                      fluid(maxWidth: 500, quality: 75) {
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                      }
                    }
                  }
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
        for (let { data, fields } of products) {
          const { localFile } = fields
          // Generate slug from product props.
          const slug = slugify(
            `${data.Brand.join('-')}-${data.Name}-${
              data.Color
            }-${data.Size.join('-')}`
          )
          // Create regular product page.
          await createPage({
            path: `/product/${slug}/`,
            component: path.resolve('./src/templates/product-template.js'),
            context: { data, localFile },
          })
          // Create amp optimized product page.
          // await createPage({
          //   path: `/product/${slug}/amp/`,
          //   component: path.resolve('./src/templates/product-template.amp.js'),
          //   context: { data, localFile },
          // })
        }
      })
    )
  })
}
