import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`ny`, `hype`, `supreme`]} />
    <div class="empty">
      <div class="empty-icon">
        <i class="icon icon-people"></i>
      </div>
      <p class="empty-title h5">This page is under construction</p>
      <p class="empty-subtitle">Please come back later.</p>
    </div>
  </Layout>
)

export default AboutPage
