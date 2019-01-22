import fetch from 'isomorphic-fetch'

const { CB_COMMERCE_API_KEY } = process.env
const API_ENDPOINT = 'https://api.commerce.coinbase.com/charges'

exports.handler = async () => {
  try {
    // Create checkout.
    const json = await fetch(API_ENDPOINT, {
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
    }).then(response => response.json())
    // Get values from response.
    const { hosted_url: url } = json
    // Return url to checkout.
    return {
      statusCode: 200,
      body: url,
    }
  } catch (e) {
    return {
      statusCode: 422,
      body: String(e),
    }
  }
}
