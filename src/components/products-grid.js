import React from 'react'

import Breadcrumb from './breadcrumb'

const ProductsGrid = () => {
  return (
    <>
      <Breadcrumb pos={1} />
      <div className="empty">
        <div className="empty-icon">
          <i className="icon icon-people"></i>
        </div>
        <p className="empty-title h5">No products available</p>
        <p className="empty-subtitle">
          Products will appear here when the Airtable connection is configured.
        </p>
      </div>
    </>
  )
}

export default ProductsGrid
