console.log('Lesson 10 starter loaded');

// ============== Propagation demo

// 1. Select required elements
const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
// a slight reminder that javascript uses camel casing
const btnPropagate = document.getElementById('btn-propagate');
const log = document.getElementById('log');

// 2. Add event listeners

// 2.1 Outer div - using a named function
// you can create a function and register that function with the event listener
function outerClick() {
  log.textContent = 'Outer click (captured) |';
}
// this is something special called pass by reference
// where you're allowing javascript to call this function for you
outer.addEventListener('click', outerClick);

// 2.2 Inner div - using an anonymous function

// 2.3 Button - using an arrow function

// ============== Gallery demo

// 1. Select required elements

// 2. Add event listeners

// 2.1 Thumbnails container - using an arrow function

// 2.2 Close button - using an arrow function

// Student TODO: Add event listener to document, which closes
// the viewer when the Escape key is pressed
