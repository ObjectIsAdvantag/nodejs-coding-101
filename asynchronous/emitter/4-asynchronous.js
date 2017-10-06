// Basic Emitter examples from https://nodejs.org/api/events.html

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.customProp = "EmitterSamples";  // accessible from Emitter callback functions via this
myEmitter.invocations = 0;

myEmitter.on('event', function (time) {
  // Experience asynchronicity
  setImmediate(function(prop, invocations) {
    console.log('this happens asynchronously');
    console.log(prop + "-" + invocations + ", 1st listener: new event with args: " + time);
  }, this.customProp, ++this.invocations);
});

myEmitter.on('event', function (time) {
  // Experience asynchronicity
  setImmediate(function(prop, invocations) {
    console.log('this happens asynchronously');
    console.log(prop + "-" + invocations + ", 2nd listener: yeh received it too: " + time);
  }, this.customProp, ++this.invocations);
});

console.log("before event is fired");
myEmitter.emit('event', new Date(Date.now()).toUTCString());
console.log("after event got fired");

