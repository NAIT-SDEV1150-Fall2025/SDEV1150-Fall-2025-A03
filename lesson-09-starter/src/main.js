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
  log.textContent += 'Outer click (captured) |';
}
// this is something special called pass by reference
// where you're allowing javascript to call this function for you
outer.addEventListener('click', outerClick);

// 2.2 Inner div - using an anonymous function
// remember that if you click the inner div you're also clicking the outer div
inner.addEventListener('click', () => { // an anonymous function/callback
  // note below we're adding to the existing textContent (using +=)
  log.textContent += 'Inner click (captured) |';
});
// bubbling can lead to some weird side effects that might not be wanted.
// and this is where we use stop propagation.

// 2.3 Button - using an arrow function
// let's make an event listener that only triggers the button event listener
// and does not bubble up.
btnPropagate.addEventListener('click', (event) => { // we're going to need the event object
  // we'll talk some more about event object
  // it's got a some methods on it stopProgation (do that) and preventDefault (look at next lesson)
  event.stopPropagation();
  log.textContent += 'Button click (captured) |';
});
// note: you're not going to come into this often but it is handy when you need it
// most times you can think stop propagation as a default.

// ============== Gallery demo

// 1. Select required elements
const thumbnails = document.querySelector('.thumbnails');
const viewer = document.querySelector('.viewer');
const mainImage = document.querySelector('#main-image');
const closeButton = document.querySelector('#close-viewer');

// 2. Add event listeners

// 2.1 Thumbnails container - using an arrow function

// I want you folks to add an event listener on the list
// pass in the event object to the function (as seen before)
thumbnails.addEventListener('click', (event) => {
  // console.log the event.target (remember this is the most speficic element)
  console.log(event.target); // if click an img tag it'll return the specific img tag.
  // also console.log the event.target.tagName which is the HTML name (in all caps)
  console.log(event.target.tagName); // the type of element that it is.
  // I'm going to check to see if tagName is an image
  if (event.target.tagName === 'IMG') {
    // if the tagName is src i want you to console.log the attribute (remember getAttribute of src)
    let imagePath = event.target.getAttribute('src');
    console.log('imagePath', imagePath);
    // we're going to do two things
    // First: show the viewer by adding the "show" class
    viewer.classList.add('show');
    // Second: we're going set the attribute of the main image
    mainImage.setAttribute('src', imagePath);
  }
});
// do this over the break

// 2.2 Close button - using an arrow function
// select the close button (look at the html)
// add a click event listener on the show button
closeButton.addEventListener('click', () => {
  // that will remove the show class from the viewer
  // Note: we've taken a look at this a few other places
  // classList has few methods: add, remove, contains and others (but those you'll use the most.)
  viewer.classList.remove('show');
});

// Student TODO: Add event listener to document, which closes
// the viewer when the Escape key is pressed
// note you'll need the "key" attribute on the event object.
document.addEventListener('keydown', (event) => {
  console.log(event.key); // this is going to show the key.
  // we're going to check to see if the key is escaped here
  if (event.key === 'Escape') {
    // we're going remove the class of show if it you clicked it.
    viewer.classList.remove('show');
  }
});
