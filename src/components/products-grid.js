import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import ProductCard from './product-card'

const ProductsGrid = () => (
  <StaticQuery
    query={productsQuery}
    render={data => {
      const products = data.allAirtable.edges.map(edge => edge.node)
      return(
      <div className="container">
        <div className="columns">
          {products.map(({id, data}) => (
            <div className="column col-4 col-xs-12" key={id}>
              <ProductCard data={data}/>
            </div>
          ))}
        </div>
      </div>)
    }}
  />
)

export default ProductsGrid

const productsQuery = graphql`
  {
    allAirtable(sort: {fields: [data___Created]}) {
      edges {
        node {
          id
          data {
            Brand
            Name
            Season
            Price
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
