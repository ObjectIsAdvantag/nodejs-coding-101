
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.customProp = "EmitterSamples";  // accessible from Emitter callback functions via this
myEmitter.invocations = 0;

myEmitter.on('event', function (time) {
  console.log(this.customProp + "-" + ++this.invocations + ", 1st listener: new event with args: " + time);
});

myEmitter.once('event', function (time) {
  console.log(this.customProp + "-" + ++this.invocations + ", 2nd listener: yeh received it too: " + time);
});

console.log("1st time event is fired");
myEmitter.emit('event', Date.now());
console.log("2nd time event is fired");
myEmitter.emit('event', Date.now());
console.log("after events got fired");
