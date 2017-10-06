
function* count() {
  for (var i = 0; true; i++) {
    yield i;
  }
}

var o = count();

var res = o.next(); // => { value: 0, done: false }
console.log("first, res: " + JSON.stringify(res));

res= o.next(); // => { value: 1, done: false }
console.log("in progress, res: " + JSON.stringify(res));

res = o.next(); // => { value: 2, done: false }
console.log("in progress, res: " + JSON.stringify(res));

res = o.next(); // => { value: 3, done: false }
console.log("always more..., res: " + JSON.stringify(res));

