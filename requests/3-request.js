const request = require('request');

request('https://ron-swanson-quotes.herokuapp.com/v2/quotes',
    { json: true },
    function (err, res, body) {
        if (err) { return console.log(err); }
        console.log(body);
    });