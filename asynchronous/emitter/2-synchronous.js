
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.customProp = "EmitterSamples";  // accessible from Emitter callback functions via this
myEmitter.invocations = 0;

myEmitter.on('event', function (time) {
  console.log(this.customProp + "-" + ++this.invocations + ", 1st listener: new event with args: " + time);
});

myEmitter.on('event', function (time) {
  console.log(this.customProp + "-" + ++this.invocations + ", 2nd listener: yeh received it too: " + time);
});

console.log("before event is fired");
myEmitter.emit('event', new Date(Date.now()).toUTCString());
console.log("after event got fired");
