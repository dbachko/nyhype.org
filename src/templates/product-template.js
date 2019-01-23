import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ pageContext: { data, localFile } }) => {
  // Generate title.
  const title = `${data.Brand.join(' × ')} ${data.Name} ${
    data.Color
  } ${data.Size.join('-')}`

  return (
    <Layout>
      <SEO title={title} keywords={[...data.Brand, data.Name, data.Color]} />
      <h2>{title}</h2>
      <div className="container">
        <div className="columns">
          <div className="column col-6 col-sm-12 p-2">
            <Img
              alt={title}
              className="img-responsive"
              fluid={localFile.childImageSharp.fluid}
            />
          </div>
          <div className="column col-6 col-sm-12 p-2">
            <button className="btn btn-success">Buy Now</button>
          </div>
        </div>
      </div>
      <Link to="/products/">Back to all products</Link>
    </Layout>
  )
}
