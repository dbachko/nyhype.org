import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Breadcrumb = ({ slug, title, pos }) => (
  <ul className="breadcrumb text-ellipsis pr-1">
    <li className="breadcrumb-item">
      <Link to="/">Home</Link>
    </li>
    {pos >= 1 ? (
      <li className="breadcrumb-item">
        <Link to="/products/">Products</Link>
      </li>
    ) : null}
    {pos >= 2 ? (
      <li className="breadcrumb-item">
        <Link to={slug}>{title}</Link>
      </li>
    ) : null}
  </ul>
)

Breadcrumb.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  pos: PropTypes.number,
}

Breadcrumb.defaultProps = {
  slug: '',
  title: '',
  pos: 0,
}

export default Breadcrumb
