import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler() {
	console.log('Hello World');
}

function goodbyeHandler(name) {
	console.log('Goodbye ' + name);
}

// register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

// Emit events
myEmitter.emit('greet');
myEmitter.emit('goodbye', 'John');

// Error handling
myEmitter.on('error', (err) => {
	console.log('Error ocured: ', err)
})

// Simulate error
myEmitter.emit('error', new Error('Something went wrong'))