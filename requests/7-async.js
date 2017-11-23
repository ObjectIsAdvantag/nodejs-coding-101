const axios = require('axios')

function log(entry) {
  console.log(new Date().toISOString() + ": " + entry)
}

async function main() {
  try {
    log('Before await')
    const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    log('After await')
    log(response.data)
  } catch (error) {
    log(error)
  }
}

log('Before main');
main();
log('After main');