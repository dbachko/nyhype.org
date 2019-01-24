import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Breadcrumb from './breadcrumb'
import ProductCard from './product-card'

const ProductsGrid = () => (
  <StaticQuery
    query={productsQuery}
    render={data => {
      const products = data.allAirtable.edges.map(edge => edge.node)
      return (
        <>
          <Breadcrumb pos={1} />
          <div className="columns">
            {products.map(({ id, data, fields }) => (
              <div className="column col-4 col-md-6 col-sm-12" key={id}>
                <ProductCard data={data} fields={fields} />
              </div>
            ))}
          </div>
        </>
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
`
