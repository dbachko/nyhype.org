import React from 'react'
import { Link } from 'gatsby'

import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ pageContext: { id, fields } }) => {
  const { brand, color, cover, name, slug, title } = fields
  return (
    <Layout>
      <SEO title={title} keywords={[...brand, name, color]} />
      <Breadcrumb slug={slug} title={title} pos={2} />
      <div className="">
        <div className="columns">
          <div className="column col-6 col-sm-12 p-2">
            <amp-img
              alt={title}
              src={cover.thumbnails.large.url}
              layout="responsive"
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
