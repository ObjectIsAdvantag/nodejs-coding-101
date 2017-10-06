let main = (() => {
  var _ref = _asyncToGenerator(function* () {
    try {
      var quote = yield getQuote();
      console.log(quote);
    } catch (error) {
      console.error(error);
    }
  });

  return function main() {
    return _ref.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var request = require('request');

function getQuote() {
  return new Promise(function (resolve, reject) {
    request('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function (error, response, body) {
      if (error) return reject(error);
      resolve(body);
    });
  });
}

main();
console.log('Ron once said,');
