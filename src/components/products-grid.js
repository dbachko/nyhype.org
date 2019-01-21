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
          {products.map(({ id, data }) => (
            <div className="column col-4 col-md-6 col-sm-12" key={id}>
              <ProductCard data={data} />
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
    allAirtable(sort: { fields: [data___Created] }) {
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
`
