import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`ny`, `hype`, `supreme`]} />
    <h1>NYHype - Supreme Streetwear!</h1>
    <p>Welcome to our brand new crypto store.</p>
    <p>
      Now you can buy some hype with{' '}
      <span className="label label-rounded label-warning">BTC</span>,{' '}
      <span className="label label-rounded">LTC</span> or{' '}
      <span className="label label-rounded label-primary">ETH</span>.
    </p>
    <p>
      Please take a look at our <Link to="/products/">products collection</Link>
    </p>
  </Layout>
)

export default IndexPage
