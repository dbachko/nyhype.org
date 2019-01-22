import fetch from 'isomorphic-fetch'

const { CB_COMMERCE_API_KEY } = process.env
const API_ENDPOINT = 'https://api.commerce.coinbase.com/charges'

exports.handler = async event => {
  const params = JSON.parse(event.body)
  const { email, firstName, lastName } = params
  try {
    // Create charge.
    const json = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CC-Api-Key': CB_COMMERCE_API_KEY,
        'X-CC-Version': '2018-03-22',
      },
      body: JSON.stringify({
        name: 'Supreme × Nike Vapor Jet 4.0 Football Gloves Red Large',
        description: '100% Authentic',
        local_price: {
          amount: '1.00',
          currency: 'USD',
        },
        metadata: {
          customer_id: email,
          customer_name: `${firstName} ${lastName}`,
        },
        pricing_type: 'fixed_price',
      }),
    }).then(response => response.json())
    console.log(`${email}: ${firstName} ${lastName} created charge!`)
    // Get values from response.
    const {
      data: { hosted_url: url },
    } = json
    // Return url to charge.
    return {
      statusCode: 200,
      body: JSON.stringify({
        url,
      }),
    }
  } catch (e) {
    console.error(e)
    return {
      statusCode: 422,
      body: String(e),
    }
  }
}
