import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import ProductCard from './product-card'

const ProductsGrid = () => (
  <StaticQuery
    query={productsQuery}
    render={data => {
      const products = data.allAirtable.edges.map(edge => edge.node)
      return (
        <div className="columns">
          {products.map(({ id, data, fields: { localFile } }) => (
            <div className="column col-4 col-md-6 col-sm-12" key={id}>
              <ProductCard data={data} cover={localFile} />
            </div>
          ))}
        </div>
      )
    }}
  />
)

export default ProductsGrid

const productsQuery = graphql`
  {
    allAirtable(sort: { fields: [data___In_Stock, data___Created] }) {
      edges {
        node {
          id
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
                fluid(maxWidth: 300, quality: 75) {
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
`
