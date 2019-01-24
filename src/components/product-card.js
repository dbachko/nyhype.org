import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const ProductCard = ({ data, fields }) => {
  const { slug, title } = fields;
  return (
    <div className="mt-4 pt-4">
      <Link to={slug}>
        <div className="badge" data-badge={`$${data.Price}`}>
          <img
            alt={title}
            src={data.Cover[0].thumbnails.large.url}
            className="img-responsive"
          />
        </div>
        <div className="text-ellipsis" title={title}>
          {title}
        </div>
      </Link>
      <div className="container">
        <div className="columns">
          <div className="column col-2 col-mr-auto col-ml-neg-6">
            <span className="chip">{data.Season}</span>
          </div>
          <div className="chip column col-6 col-lg-7 col-sm-4 col-xs-6">
            <figure
              className="avatar avatar-sm"
              data-initial="✓"
              style={{ backgroundColor: '#32b643' }}
            />{' '}
            Free Shipping
          </div>
        </div>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  data: PropTypes.object,
  fields: PropTypes.object,
}

export default ProductCard
