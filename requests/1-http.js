// Native to all EcmaScript editions, 
// the http module returns a Stream

const http = require('http');

http.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});