import { message, greet } from './myModule.js'; // Explicitly import named exports

console.log(message);
console.log(greet('Nitesh (ESM)'));

// If myModule.js had 'export default greet;':
// import defaultGreet from './myModule.js';
// console.log(defaultGreet('Another Name'));