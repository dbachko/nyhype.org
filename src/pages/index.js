import React from 'react'
import { Link } from 'gatsby'

import BTC from '../../node_modules/cryptocurrency-icons/svg/color/btc.svg'
import ETH from '../../node_modules/cryptocurrency-icons/svg/color/eth.svg'
import LTC from '../../node_modules/cryptocurrency-icons/svg/color/ltc.svg'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`ny`, `hype`, `supreme`]} />
    <h1>Supreme Streetwear!</h1>
    <p>Welcome to our online store.</p>
    <p>
      Now you can buy <b>Brand New Authentic Supreme</b> streatwear with{' '}
      <span className="chip">
        <img className="avatar avatar-sm" src={BTC} alt="Bitcoin" />
        Bitcoin
      </span>,{' '}
      <span className="chip">
        <img className="avatar avatar-sm" src={LTC} alt="Bitcoin" />
        Litecoin
      </span> or{' '}
      <span className="chip">
        <img className="avatar avatar-sm" src={ETH} alt="Bitcoin" />
        Ethereum
      </span>
    </p>
    <p>
      Please take a look at our <Link to="/products/">products collection</Link>
    </p>
  </Layout>
)

export default IndexPage
