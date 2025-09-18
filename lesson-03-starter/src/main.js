console.log('Lesson 03 starter loaded');

// Instructor TODO:
// 1. Declare variables using var, let, const
let greeting = "Hi Dan!";
let count = 42;
const isActive = true;

// 2. Log their types with console.log(typeof …)
console.log(`Type of greeting: ${typeof greeting}`);
console.log(`Type of count: ${typeof count}`);
console.log(`Type of isActive: ${typeof isActive}`);

// 3. Try built-in functions: alert(), prompt(), parseInt(), toString()
const userName = prompt("enter your name");
const continueDemo = confirm(`Hi ${userName} do you want to continue? `);
console.log(`${userName} chose "${continueDemo}" to continue`);

// 4. Manipulate values and observe results in the console
let x = 12;
let y = 3;
console.log("Let's do Maths");
console.log(`${x} + ${y} = ${ x + y }`);
console.log(`${x} - ${y} = ${ x - y }`);
console.log(`${x} * ${y} = ${ x * y }`);
console.log(`${x} / ${y} = ${ x / y }`);

// Student TODO:
// Prompt the user for their name and age
// Log a greeting message using the provided name and age