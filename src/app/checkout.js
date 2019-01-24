import React from 'react'
import { Router } from '@reach/router'

import Layout from '../components/layout'
import ShippingAddressForm from './components/checkout-form'

const CheckoutForm = ({ productId, location }) => {
  const { fields } = location.state
  const { brand, color, cover, name, slug, title } = fields
  return (
    <div>
      <h5>Shipping info:</h5>
      <div className="container">
        <div className="columns">
          <div className="column col-md-12">
            <ShippingAddressForm {...fields} productId={productId} />
          </div>
          <div class="divider-vert" data-content="ℼ" />
          <div className="column col-md-12">
            <h5>{title}</h5>
          </div>
        </div>
      </div>
    </div>
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
