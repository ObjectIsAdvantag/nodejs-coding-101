const axios = require('axios')
 
axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
  .then(response => {
    console.log(response.data)
  })
  .catch(console.log)

  