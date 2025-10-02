console.log('Lesson 06 starter loaded');

// Selecting elements
const titleEl = document.querySelector('#page-title');
const taglineEl = document.querySelector('.tagline');
const heroImg = document.querySelector('#hero-img');
const heroCaption = document.querySelector('#hero-caption');
const dynamicBox = document.querySelector('#dynamic-box');
const footerNote = document.querySelector('#footer-note');

// 1. Create a new variable for the feature list element
const featureList = document.querySelector('#feature-list');

// 2. Add feature list to the displayed elements below
console.log('Selected elements:', {
  titleEl, taglineEl, heroImg, heroCaption, dynamicBox, footerNote,
});

// 3. Modify list content

// 4. Add a new item dynamically
// create an element
const li = document.createElement('li'); // li is going to be the type element
// add text content to that elment
li.textContent = 'Flexibility';
// add a class of "feature" on the element
li.classList.add('feature'); // you can also use li.className = 'feature';
// I want you to append it to the page.
// attach the element as a child to the list selected above.
featureList.appendChild(li); // you can also do featureList.append(li);

// 5. Retreive all list items (querySelectorAll) and update their text
// use querySelector all to select all of the items in that list
const features = document.querySelectorAll('.feature');
// this is a NodeList which behaves very similary to an array.
// we'll take a deeper look at this later.
// debugger; // we're going to have to "step" into the function.
features.forEach((featureItem, index) => { // this is a function.
  // this function will get executed for each element in the nodelist
  // we can dynamically add content
  featureItem.textContent = `item ${index + 1}: ${featureItem.textContent}`;
  // all we're doing above is changing the text content.
});

// 6. Removing the first item from the list using DOM relationships to find it
// we're going to see that the first element from the list as a child
// you can select with element.firstElementChild
console.log('element to remove');
console.log(featureList.firstElementChild);
// let's remove it
featureList.removeChild(featureList.firstElementChild);
// note you can also do featureList.firstElementChild.remove();

// 7. Update the second item using nextElementSibling

// 8. Move the last item to the front of the list

// 9. Use a timer to add a new item after 3 seconds have passed

// **** THE FOLLOWING IS EXISTING CODE FROM LESSON 05

// textContent vs innerHTML
titleEl.textContent = 'DOM: Your JavaScript Window into Page Structure';

dynamicBox.innerHTML = `
  <p class="desc">
    This block was injected with <em>innerHTML</em>. It can include <strong>markup</strong>.
  </p>
`;

// When you only need text (no markup), prefer textContent:
heroCaption.textContent = 'This caption was updated using textContent.';

// Attributes & styles
heroImg.setAttribute('alt', 'A replaceable sample image');
heroImg.style.borderColor = '#0d6efd'; // inline style to illustrate visual change

// Create small helper functions for reuse
function updateText(selector, text) {
  const el = document.querySelector(selector);
  if (!el) return console.warn('No element found for', selector);
  el.textContent = text;
}

function updateHTML(selector, html) {
  const el = document.querySelector(selector);
  if (!el) return console.warn('No element found for', selector);
  el.innerHTML = html;
}

function setAttr(selector, name, value) {
  const el = document.querySelector(selector);
  if (!el) return console.warn('No element found for', selector);
  el.setAttribute(name, value);
}

function setStyle(selector, styleObj = {}) {
  const el = document.querySelector(selector);
  if (!el) return console.warn('No element found for', selector);
  Object.entries(styleObj).forEach(([k, v]) => {
    el.style[k] = v;
  });
}

// Use helpers to perform simple tasks
updateText('.tagline', 'Selecting, reading, and modifying nodes with JavaScript.');
updateHTML('#dynamic-box', `
  <p class="desc">
    Replaced again via <code>updateHTML()</code>. Notice how we can inject different markup here.
  </p>
`);

setAttr('#hero-img', 'title', 'Hover title set from JS');
setStyle('#hero-img', { borderColor: 'navy' });

// Footer text tweak (demonstrate class toggle & style change)
footerNote.classList.add('footer-strong');
// Require innerHTML here to render the &copy; entity correctly
footerNote.innerHTML = '&copy; 2025 Front End Fundamentals';

// Null-safety tip: check selections before using them
const missing = document.querySelector('#does-not-exist');
if (!missing) {
  console.warn('Selector #does-not-exist did not match any element.');
}
