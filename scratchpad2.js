var events = require ('events');

// create eventEmitter Object
var eventEmitter = new events.EventEmitter();

// Option #1
// Create an event handler as follows
/*var connectHandler = function connected() {
    console.log('connection successful.');
    // fire the data_received event
    eventEmitter.emit('data_received');
}*/

// Option #2: What is the diff vs option #1
function connected () {
    console.log ('connection successful.');
    eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', new connected());

// Question: Why won't: eventEmitter.on('connection', new connected()); work?

// Bind data_received event with anonymous function
eventEmitter.on('data_received', function() {
    console.log('data received succesfully.');
});

//Fire the connection event
eventEmitter.emit('connection');
console.log ("Program Ended.");
