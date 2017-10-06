// Basic Emitter examples from https://nodejs.org/api/events.html

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');


// Sample which leverages this 
myEmitter.on('eventWithArgsAndThis', function(a, b) {
  console.log(a, b, this);
  // Prints:
  //   a b MyEmitter {
  //     domain: null,
  //     _events: { event: [Function] },
  //     _eventsCount: 1,
  //     _maxListeners: undefined }
});
myEmitter.emit('eventWithArgsAndThis', 'a', 'b');


// Not possible with arrow functions
myEmitter.on('eventArrowFunction', (a, b) => {
  console.log(a, b, this);
  // Prints: a b {}
});
myEmitter.emit('eventArrowFunction', 'a', 'b');
