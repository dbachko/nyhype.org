import fetch from 'isomorphic-fetch'

const { CB_COMMERCE_API_KEY } = process.env
const API_ENDPOINT = 'https://api.commerce.coinbase.com/checkouts'

exports.handler = async () => {
  return fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CC-Api-Key': CB_COMMERCE_API_KEY,
      'X-CC-Version': '2018-03-22',
    },
    body: JSON.stringify({
      name: 'The Sovereign Individual',
      description: 'Mastering the Transition to the Information Age',
      local_price: {
        amount: '100.00',
        currency: 'USD',
      },
      pricing_type: 'fixed_price',
      requested_info: ['email'],
    }),
  })
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: data,
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }))
}
