const axios = require('axios')

async function main() {
  try {
    const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    console.log(response.data)
  }
  catch (error) {
    console.log(error)
  }
}

main()