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
const heroImg = document.querySelector('#hero-img');
const heroCaption = document.querySelector('#hero-caption');
const dynamicBox = document.querySelector('#dynamic-box');
const footerNote = document.querySelector('#footer-note');

console.log('Selected Elements', {
  titleEl,
  taglineEl,
  heroImg,
  heroCaption,
  dynamicBox,
  footerNote,
});

// 2. textContent vs innerHTML
// textContent we're making it so that you modify only the text
// and not the html of an element
titleEl.textContent = 'Modified in JS';

// in innerHTML you can modify the tags inside the element

dynamicBox.innerHTML = `
  <p class="desc">
    We injected html using the <em>innerHTML property</em>. <br/>
    It can include <strong>HTML Markup</strong>.
  </p>
`;
// you can see the differences above if you change the innerHTML to
// textContent.

// 3. Attributes & styles

// 4. Create small helper functions for reuse

// 5. Use helpers to perform simple tasks

// 6. Footer text tweak (demonstrate class toggle & style change)

// Require innerHTML here to render the &copy; entity correctly

// 7. Null-safety tip: check selections before using them
