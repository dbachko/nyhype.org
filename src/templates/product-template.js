import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ pageContext: { data } }) => (
  <Layout>
    <SEO title="Shop all products" keywords={[`ny`, `hype`, `supreme`]} />
    <div style={{ width: 960, margin: '4rem auto' }}>
      <h1>{data.Name}</h1>
    </div>
    <Link to="/products/">Back to all products</Link>
  </Layout>
)
