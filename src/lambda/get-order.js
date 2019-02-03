var request = require('request')

export function handler(event, context, callback) {
  const { token } = event.queryStringParameters
  // const token = '485acab8-b26e-4218-8f5a-5b0b60c08574'

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
      'user': 'ST_MjUxOTkxZjgtOGVhNy00ZWUxLWFiYzQtYjI2YWM1NmNjYjU3NjM2ODQ3NDk1OTE5NjMyODc2'
    },
    method: 'GET',
    json: true,
  }

  request(options, function (error, response, body){
    const { statusCode } = response
    console.log('statusCode', statusCode)
    console.log('error', error);
    if (error || statusCode !== 200) {
      callback('Wrong token or wrong credentials', {
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