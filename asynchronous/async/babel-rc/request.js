var request = require('request');
 
function getQuote() {
  return new Promise(function(resolve, reject) {
    request('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function(error, response, body) {
      if (error) return reject(error);
      resolve(body);
    });
  });
}
 
async function main() {
  try {
    var quote = await getQuote();
    console.log(quote);
  } catch(error) {
    console.error(error);
  }
}
 
main();
console.log('Ron once said,');
