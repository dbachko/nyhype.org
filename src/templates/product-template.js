import React from 'react'
import { navigate } from '@reach/router'

import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ pageContext: { id, fields } }) => {
  const { brand, color, cover, name, slug, title } = fields

  const handleClick = async function() {
    await navigate(`/checkout/${id}`, { state: { fields } })
  }

  return (
    <Layout>
      <SEO title={title} keywords={[...brand, name, color]} />
      <Breadcrumb slug={slug} title={title} pos={2} />
      <div className="">
        <div className="columns">
          <div className="column col-6 col-sm-12 p-2">
            <img
              alt={title}
              src={cover.thumbnails.large.url}
              className="img-responsive"
            />
          </div>
          <div className="column col-6 col-sm-12 p-2">
            <h2>{title}</h2>
            <button className="btn btn-success" onClick={handleClick}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
