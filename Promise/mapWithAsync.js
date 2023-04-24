const arr = [1, 2, 3, 4, 5];
const asyncFilter = async (arr, predicate) =>
  Promise.all(arr.map(predicate)).then((results) =>
    arr.filter((_v, index) => results[index])
  );
async function a() {
  const results = await asyncFilter(arr, async (i) => {
    return i % 2 === 0;
  });
  return results;
}
const ab = a();
console.log(ab);

// Importing events
// const EventEmitter = require('events');

// // Initializing event emitter instances
// var eventEmitter = new EventEmitter();

// // Registering to myEvent
// eventEmitter.on('myEvent', (msg) => {
//    console.log(msg);
// });
// eventEmitter.on('data', (msg) => {
//    console.log("vishal",msg);
// });

// // Triggering myEvent
// eventEmitter.emit('myEvent', "First event");
