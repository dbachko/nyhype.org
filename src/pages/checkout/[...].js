import React from 'react'
import { Router } from '@reach/router'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Checkout from '../../app/checkout'

const CheckoutPage = () => {
  return (
    <Layout>
      <SEO title="Checkout" />
      <Router basepath="/checkout">
        <Checkout path="/:productId" />
        <NotFound default />
      </Router>
    </Layout>
  )
}

const NotFound = () => <p>Sorry, page not found</p>

export default CheckoutPage
