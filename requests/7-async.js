const axios = require('axios')

function log(entry) {
  console.log(new Date().toISOString() + ": " + entry)
}

async function main() {
  try {
    const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    return response.data
  } catch (error) {
    log(error)
  }
}

main().then(console.log)