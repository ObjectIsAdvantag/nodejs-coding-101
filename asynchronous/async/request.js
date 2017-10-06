var request = require('request');

function log(entry) {
  console.log(new Date().toISOString() + ": " + entry);
}

function getQuote() {
  return new Promise(function (resolve, reject) {
    request('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function (error, response, body) {
      if (error) return reject(error);
      resolve(body);
    });
  });
}

async function main() {
  try {
    log('Before await');
    var quote = await getQuote();
    log('After await');
    log(quote);
  } catch (error) {
    error(error);
  }
}

log('Before main');
main();
log('After main');