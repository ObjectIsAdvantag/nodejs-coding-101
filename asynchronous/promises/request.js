//
// why Promises ? : http://bluebirdjs.com/docs/why-promises.html
//
var request = require('request');

function getQuote() {
  return new Promise(function (resolve, reject) {
    request('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function (error, response, body) {
      if (error) return reject(error);
      resolve(body);
    });
  });
}

console.log("before promise");

getQuote().then(console.log).then(function () {
  console.log("after promise");
}).catch(function (err) {
  console.log("error: " + err);
});

