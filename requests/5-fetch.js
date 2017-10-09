const fetch = require('node-fetch');
 
fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
  .then(response => {
    return response.json();
  })
  .then(json => {
    console.log(json);
  })
  .catch(error => {
    console.log(error);
  });