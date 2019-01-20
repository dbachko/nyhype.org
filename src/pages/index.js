import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`ny`, `hype`, `supreme`]} />
    <h1>¡Hola, amigos!</h1>
    <p>Welcome to our brand new Supreme crypto store.</p>
    <p>Now you can buy some hype staff with <span class="label label-rounded label-warning">BTC</span>, <span class="label label-rounded">LTC</span> or even <span class="label label-rounded label-primary">ETH</span>.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/products/">Products</Link>
  </Layout>
)

export default IndexPage
