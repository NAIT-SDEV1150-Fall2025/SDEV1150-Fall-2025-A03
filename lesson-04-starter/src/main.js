console.log('Lesson 04 starter loaded');

// Instructor TODO:
// 1. Simple if
// this is a way to control the flow of your code.
const x = 5;
if (x > 0) {
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
// 5. do-while loop
// 6. for loop

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
