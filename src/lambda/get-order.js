var request = require('request')

export function handler(event, context, callback) {
  const { token } = event.queryStringParameters

  if (!token) {
    callback('No token')
    return
  }

  const options = {
    url: `https://app.snipcart.com/api/orders/${token}`,
    headers: {
      'Accept': 'application/json'
    },
    auth: {
      'user': 'S_MjFkODkxMzAtOGRiMy00ODU3LTk2MjEtNGY1ZDllZmFkNmNlNjM2OTQxNDI1NDc3NjY5NDIw'
    },
    method: 'GET',
    json: true,
  }

  request(options, function (error, response, body){
    const { statusCode } = response
    if (error || statusCode !== 200) {
      callback(`Wrong token or wrong credentials ${token}`, {
        statusCode: 401
      })
      return
    } else {
      callback(null, {
        // return null to show no errors
        statusCode: 200, // http status code
        body: JSON.stringify(body),
      })
    }
  })
}