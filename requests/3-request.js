// The request module invokes an HTTP resource and get a formatted response 
// It supports both HTTP and HTTPS and follows redirects by default
// 
// Was the de facto standard in ES5 ... until ES6 introduced promises
const request = require('request');

request('https://ron-swanson-quotes.herokuapp.com/v2/quotes',
        function (err, res, body) {
            if (err) { return console.log(err); }
            console.log(body);
        });