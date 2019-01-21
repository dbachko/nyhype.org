import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    className="bg-primary p-1"
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <header
      className="navbar"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      <section className="navbar-section">
        <Link to="/" className="navbar-brand mr-2 text-light">
          {siteTitle}
        </Link>
      </section>
      <section className="navbar-section">
        <Link to="/products/" className="btn btn-link text-light">
          Products
        </Link>
        <Link to="/about/" className="btn btn-link text-light">
          About Us
        </Link>
      </section>
    </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
