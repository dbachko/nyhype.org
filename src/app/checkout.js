import React from 'react'
import { Router } from '@reach/router'

import Layout from '../components/layout'
import ShippingAddressForm from './components/checkout-form'

const CheckoutForm = ({ productId, location }) => {
  const { fields } = location.state
  const { brand, color, cover, name, price, size, title } = fields
  return (
    <>
      <div className="container">
        <div className="columns">
          <div className="column col-md-12">
            <h5>Shipping info:</h5>
            <ShippingAddressForm {...fields} productId={productId} />
          </div>
          <div className="divider-vert hide-md" data-content="ℼ" />
          <div className="column col-md-12">
            <div className="tile">
              <div className="tile-icon">
                <img
                  alt={title}
                  src={cover.thumbnails.small.url}
                  className="img-responsive"
                />
              </div>
              <div className="tile-content">
                <h4 className="tile-title brand-name">{brand.join(' × ')}</h4>
                <small className="tile-subtitle">{name}</small>
              </div>
            </div>
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
                    <span className="tile-title">Shipping</span>
                  </div>
                  <div className="tile-action">
                    <span className="">Free</span>
                  </div>
                </div>
              </div>
              <div className="column col-12">
                <div className="tile">
                  <div className="tile-content">
                    <span className="tile-title">Price</span>
                  </div>
                  <div className="tile-action">
                    <span className="">{`$${price.toFixed(2)}`}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="checkout-total columns">
              <div className="column col-6">
                <span className="product-price">Total</span>
              </div>
              <div className="column col-6 text-right">
                <span className="product-price">{`$${price.toFixed(2)}`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const Checkout = () => {
  return (
    <Layout>
      <Router>
        <CheckoutForm path="/checkout/:productId" />
      </Router>
    </Layout>
  )
}

export default Checkout
