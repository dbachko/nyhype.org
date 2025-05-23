import React from 'react'
import { Router } from '@reach/router'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

// Import any app routes/components
// For example:
// import Dashboard from '../../app/dashboard'

const App = () => {
  return (
    <Layout>
      <SEO title="App" />
      <Router basepath="/app">
        {/* Add your app routes here */}
        {/* For example: */}
        {/* <Dashboard path="/dashboard" /> */}
        <NotFound default />
      </Router>
    </Layout>
  )
}

const NotFound = () => <p>Sorry, page not found</p>

export default App
