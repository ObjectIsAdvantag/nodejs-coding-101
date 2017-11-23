// The node-fetch module mimics the native window.fetch API
// available natively in Web Browsers.
const fetch = require('node-fetch')
 
fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
  .then(response => {
    return response.json()
  })
  .then(console.log)
  .catch(console.log)