console.log('Lesson 04 starter loaded');

// Instructor TODO:
// 1. Simple if
// this is a way to control the flow of your code.
const x = 5;
if (x > 0) { // the x > 0 needs to be true for the below to pass.
  console.log(`x is ${x} which is positive`);
}
// 2. if-else
// let's check if x is odd or even
// in javascript we use === because it checks for the equality
// but it also checks for the data type equality
// this is different than other languages (python ==)
if (x % 2 === 0) {
  console.log(`x is even`);
} else {
  console.log(`x is odd`);
}

// 3. Nested if-else
// else if just allows you to check for multiple conditions

// to demonstrate how this code works we're going to use
// the "debugger" to step through the code.
// to use the debugger you just write debugger; on an new line
// you can uncomment the line below to step through the debugger
// debugger;
if (x > 10) {
  console.log(`x is greater ten`);
} else if (x > 5) {
  console.log(`x is greater five`);
} else if (x > 1) {
  console.log(`x is great than one`);
} else  {
  console.log(`x is zero or negative`);
}

// 4. while loop
let count = 0;

// let's take a look at how this loop works with the debugger.
// debugger;
// so for the block to execute
while (count < 5) {
  console.log(`the count current is ${count}`);
  // is it increases the count by 1 every time
  count = count + 1;
}


// 5. do-while loop
// the only difference between these loops is that while has the possibility
// that it will never execute, if the condition is false.
// In a do while loop it will always execute once, it also executes the condition after the block.
let z = 0;

console.log("the do while loops")
do {
  console.log(`z is ${z}`);
  // for this condition you need make condition false at some point
  z++; // this equivalent to z = z + 1;
} while (z < 0); // the condition is false but the block is executed at least once.


// 6. for loop
// a for loop has three parts
// first: let j = 0; this is the variable that will be iterator.
// second: j < 3; this is going to the condition
// thidd: j = j + 1 (or j++) this is going to be how much it increases by.
for (let j = 0; j < 3; j = j + 1) {
  console.log(`j is ${j}`);
}

// Student TODO:
// 7. Snippet with bugs for debugging practice



// Snippet with bugs for debugging practice - uncomment when ready
/*
const num = 10;

if (num < 5) { // Intentional bug: should be num > 5
  console.log('num is greater than 5');
} else {
  console.log('num is 5 or less');
}

for (let k = 0; k < 3; k = k - 1) { // Intentional bug: k should increment
  console.log(k);
}
*/
// 8. Debugging practice
