import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProductsGrid from '../components/products-grid'

const ProductsPage = () => (
  <Layout>
    <SEO title="Shop all products" keywords={[`ny`, `hype`, `supreme`]} />
    <ProductsGrid />
  </Layout>
)

export default ProductsPage
