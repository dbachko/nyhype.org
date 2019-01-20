import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const ProductsGrid = () => (
  <StaticQuery
    query={productsQuery}
    render={data => {
      const products = data.allAirtable.edges.map(edge => edge.node)
      return(
      <div className="container">
        <div className="columns">
          {products.map(({id, data}) => {
            const title = `${data.Brand.join(' × ')} ${data.Name}`;
            return(
              <div className="column col-4" key={id}>
                <div className="parallax">
                  <div className="parallax-top-left" tabIndex="1"></div>
                  <div className="parallax-top-right" tabIndex="2"></div>
                  <div className="parallax-bottom-left" tabIndex="3"></div>
                  <div className="parallax-bottom-right" tabIndex="4"></div>
                  <div className="parallax-content">
                    <div className="parallax-front">
                      <h2>{title}</h2>
                    </div>
                    <div className="parallax-back">
                      <img src={data.Cover[0].thumbnails.large.url} alt={title} className="img-responsive rounded"></img>
                    </div>
                  </div>
                </div>
              </div>
            )}
          )}
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
