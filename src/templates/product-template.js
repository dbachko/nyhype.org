import React from 'react'
import { navigate } from '@reach/router'

import BTC from '../../node_modules/cryptocurrency-icons/svg/color/btc.svg'
import ETH from '../../node_modules/cryptocurrency-icons/svg/color/eth.svg'
import LTC from '../../node_modules/cryptocurrency-icons/svg/color/ltc.svg'

import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ pageContext: { id, fields } }) => {
  const {
    brand,
    color,
    cover,
    desc,
    name,
    price,
    season,
    size,
    slug,
    title,
  } = fields

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
            <h4 className="brand-name">{brand.join(' × ')}</h4>
            <h3 className="product-name">{name}</h3>
            <div className="product-details columns">
              <div className="column col-12">
                <div className="tile">
                  <div className="tile-content">
                    <span className="tile-title">Condition</span>
                  </div>
                  <div className="tile-action">
                    <span className="">New</span>
                  </div>
                </div>
              </div>
              <div className="column col-12">
                <div className="tile">
                  <div className="tile-content">
                    <span className="tile-title">Color</span>
                  </div>
                  <div className="tile-action">
                    <span className="">{color}</span>
                  </div>
                </div>
              </div>
              <div className="column col-12">
                <div className="tile">
                  <div className="tile-content">
                    <span className="tile-title">Size</span>
                  </div>
                  <div className="tile-action">
                    <span className="">{size}</span>
                  </div>
                </div>
              </div>
              <div className="column col-12">
                <div className="tile">
                  <div className="tile-content">
                    <span className="tile-title">Season</span>
                  </div>
                  <div className="tile-action">
                    <span className="">{season}</span>
                  </div>
                </div>
              </div>
            </div>
            {desc ? (
              <div className="product-desc">
                <blockquote>
                  <p>{desc}</p>
                  <cite>- Supreme Store</cite>
                </blockquote>
              </div>
            ) : null}
            <div className="product-price text-right my-2">{`$${price.toFixed(
              2
            )}`}</div>
            <div className="pay-with text-right">
              <div className="chip pay-with--text">Pay with:</div>
              <div className="chip">
                <img className="avatar avatar-sm" src={BTC} alt="Bitcoin" />
                Bitcoin
              </div>
              <div className="chip">
                <img className="avatar avatar-sm" src={LTC} alt="Bitcoin" />
                Litecoin
              </div>
              <div className="chip">
                <img className="avatar avatar-sm" src={ETH} alt="Bitcoin" />
                Ethereum
              </div>
            </div>
            <div className="divider" />
            <div className="columns">
              <div className="column col-6" />
              <div className="column col-6 col-sm-12">
                <button
                  className="btn btn-lg btn-error btn-buy column col-12 my-2"
                  onClick={handleClick}
                >
                  Buy Now
                </button>
                <div className="purchase-opts text-uppercase text-center">
                  <span className="instock">In Stock.</span>{' '}
                  <span className="free-shipping">
                    <b>Free Shipping</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
