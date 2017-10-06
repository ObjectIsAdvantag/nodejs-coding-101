
function* logger() {
  while (true) {
    var entry = yield;
    console.log(entry);
  }
}

// Create and bootstrap the logger
var o = logger();
var res = o.next(); // => {"done":false}
console.log("# nothing yet, the logger is waiting for values: " + JSON.stringify(res));

res = o.next("Bonjour");
console.log("# let's push more data");
res = o.next("à");
res = o.next("tous"); 