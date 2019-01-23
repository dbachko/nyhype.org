import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import slugify from '@sindresorhus/slugify'

const ProductCard = ({ data, cover }) => {
  // Generate title.
  const title = `${data.Brand.join(' × ')} ${data.Name}`
  // Generate slug from product props.
  const slug = slugify(
    `${data.Brand.join('-')}-${data.Name}-${data.Color}-${data.Size.join('-')}`
  )
  return (
    <div className="mt-4 pt-4">
      <Link to={`/product/${slug}/`}>
        <div className="badge" data-badge={`$${data.Price}`}>
          <Img
            alt={title}
            className="img-responsive"
            fluid={cover.childImageSharp.fluid}
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
  cover: PropTypes.object,
}

export default ProductCard
