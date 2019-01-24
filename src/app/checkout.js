import React from 'react'
import { Router } from '@reach/router'

import Layout from '../components/layout'
import ShippingAddressForm from './components/checkout-form'

const CheckoutForm = ({ productId }) => {
  return (
    <div>
      <h5>Shipping info:</h5>
      <div className="container">
        <div className="columns">
          <div className="column col-6 col-sm-12 p-2">
            <ShippingAddressForm productId={productId} />
          </div>
          <div className="column col-6 col-sm-12 p-2">
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
