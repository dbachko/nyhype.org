import React from 'react'
// import { Router } from '@reach/router'

import Layout from '../components/layout'

const App = () => {
  fetch('/.netlify/functions/hello')
    .then(response => response.json())
    .then(console.log)
  return (
    <Layout>
      <h1>Hola it's dynamic!</h1>
    </Layout>
  )
}

export default App
