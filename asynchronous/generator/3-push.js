
function* logger() {
  console.log(yield);
  console.log(yield);
  console.log(yield);
}

// Create and bootstrap the logger
var o = logger();
var res = o.next(); // => {"done":false}
console.log("# nothing yet, the logger is waiting for values: " + JSON.stringify(res));

res= o.next("Bonjour"); // => {"done":false}
console.log("# in progress, res: " + JSON.stringify(res));

res = o.next("à "); // => { done: false }
console.log("# in progress, res: " + JSON.stringify(res));

res = o.next("tous"); // => { done: true }
console.log("# completed, res: " + JSON.stringify(res));

