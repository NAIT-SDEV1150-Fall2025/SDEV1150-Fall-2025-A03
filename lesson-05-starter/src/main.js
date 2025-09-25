console.log('Lesson 03 starter loaded');

// 1. Selecting element
/*
I want you folks to select the following elements
- element with id of page-title
- element with class tagline
- element with id hero-img
- element with id hero-caption
*/
// Note: when using the querySelector to select an ID you put
// a # in front of it. **IMPORTANT**
const titleEl = document.querySelector('#page-title');
// Note: for selecting class using the querySelector you need to but
// a . in front of the classname
const taglineEl = document.querySelector('.tagline');

console.log('Selected Elements', {
  titleEl,
  taglineEl,
});

// 2. textContent vs innerHTML

// 3. Attributes & styles

// 4. Create small helper functions for reuse

// 5. Use helpers to perform simple tasks

// 6. Footer text tweak (demonstrate class toggle & style change)

// Require innerHTML here to render the &copy; entity correctly

// 7. Null-safety tip: check selections before using them
