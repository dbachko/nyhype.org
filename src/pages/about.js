import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`ny`, `hype`, `supreme`]} />
    <div className="empty">
      <div className="empty-icon">
        <i className="icon icon-people"></i>
      </div>
      <p className="empty-title h5">This page is under construction</p>
      <p className="empty-subtitle">Please come back later.</p>
    </div>
  </Layout>
)

export default AboutPage
