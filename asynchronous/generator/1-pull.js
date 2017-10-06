// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
//
// Generators are functions which can be exited and later re-entered. 
// Their context (variable bindings) will be saved across re-entrances.
//
// Calling a generator function does not execute its body immediately; 
// an iterator object for the function is returned instead. 
// When the iterator's next() method is called, the generator function's body 
//   - is executed until the first yield expression, which specifies the value to be returned from the iterator 
//   - or, with yield*, delegates to another generator function. 
//
// The next() method returns an object with 
//     - a value property containing the yielded value 
//     - and a done property which indicates whether the generator has yielded its last value as a boolean. 
//
// Calling the next() method with an argument will resume the generator function execution, 
// replacing the yield statement where execution was paused with the argument from next(). 

function* values() {
  for (var i = 0; i < arguments.length; i++) {
    yield arguments[i];
  }
}

var o = values(1, 2, 3);

var res = o.next(); // => { value: 1, done: false }
console.log("first, res: " + JSON.stringify(res));

res= o.next(); // => { value: 2, done: false }
console.log("in progress, res: " + JSON.stringify(res));

res = o.next(); // => { value: 3, done: false }
console.log("in progress, res: " + JSON.stringify(res));

res = o.next(); // => { value: undefined, done: true }
console.log("last element, res: " + JSON.stringify(res));
