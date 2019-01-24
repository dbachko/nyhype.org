import Checkout from '../app/checkout'

export default Checkout

// `src/app` is not "special", it is re-exported by `src/pages/checkout.js`
// and contains all the client side dynamic App pages that we dont want to be statically generated.
// `src/pages/checkout.js` skips the static generation process because of `gatsby-plugin-create-client-paths`
// configured in `gatsby-config.js`
