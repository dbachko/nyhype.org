import { Link } from 'gatsby'
import React from 'react'

const Footer = () => (
  <footer className="site-footer">
    <div className="container docs-footer">
      <div className="columns">
        <div className="column col-4 col-sm-12 copyright">
          <span>© {new Date().getFullYear()} NYHype.org</span>
        </div>
        <div className="column col-8 col-sm-12 text-right">
          <div className="links">
            <Link to="/contact/">
              Contact<span className="hide-sm"> Us</span>
            </Link>
            {' · '}
            <Link to="/privacy/">
              Privacy<span className="hide-sm"> Policy</span>
            </Link>
            {' · '}
            <span className="made-with">
              Made with <span className="text-error">♥</span> in NYC
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
