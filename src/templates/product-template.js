import React from 'react'
import { Link } from 'gatsby'

import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ pageContext: { id, data, slug, title } }) => {
  return (
    <Layout>
      <SEO title={title} keywords={[...data.Brand, data.Name, data.Color]} />
      <Breadcrumb slug={slug} title={title} pos={2} />
      <div className="">
        <div className="columns">
          <div className="column col-6 col-sm-12 p-2">
            <img
              alt={title}
              src={data.Cover[0].thumbnails.large.url}
              className="img-responsive"
            />
          </div>
          <div className="column col-6 col-sm-12 p-2">
            <h2>{title}</h2>
            <Link to={`/checkout/${id}`}>
              <button className="btn btn-success">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
