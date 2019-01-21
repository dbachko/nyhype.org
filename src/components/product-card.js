import React from 'react'
import PropTypes from 'prop-types'

const ProductCard = ({data}) => {
  const title = `${data.Brand.join(' × ')} ${data.Name}`;
  return (
    <div className="m-2 p-2">
      <a className="" href="#">
        <div className="badge" data-badge={`$${data.Price}`}>
          <img alt={title} src={data.Cover[0].thumbnails.large.url} className="img-responsive" />
        </div>
        <div className="text-ellipsis" title={title}>
          {title}
        </div>
      </a>
      <div className="container">
        <div className="columns">
          <div className="column col-2 col-mr-auto col-ml-neg-6">
            <span className="chip">{data.Season}</span>
          </div>
          <div className="chip column col-6 col-lg-7 col-sm-4 col-xs-6">
            <figure className="avatar avatar-sm" data-initial="✓" style={{backgroundColor: "#32b643"}}></figure> Free Shipping
          </div>
        </div>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  data: PropTypes.object,
}

ProductCard.defaultProps = {
  data: {},
}

export default ProductCard
