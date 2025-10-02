console.log('Lesson 08 starter loaded');

// 1. load event (document ready) - NOTE this is unnecessary if using `defer` in the script tag or using module type
// note here: the window in javascript as the dom and all of the functions
// built into the js language
window.addEventListener('DOMContentLoaded', () => {
  console.log('Fired on mounting of the page');
  // 2. Selecting elements
  /*
    in two mins I want you to select the items with the following ids:
    btn-toggle
    btn-message
    message
    hover-card
    hover-status
    key-output
    list
    selection
  */
  let btnToggle = document.querySelector('#btn-toggle');
  let btnMessage = document.querySelector('#btn-message');
  let message = document.querySelector('#message');
  let hoverCard = document.querySelector('#hover-card');
  let hoverStatus = document.querySelector('#hover-status');
  let keyOutput = document.querySelector('#key-output');
  let list = document.querySelector('#list');
  let selection = document.querySelector('#selection');
  console.log({ btnToggle, btnMessage, message, hoverCard, hoverStatus, keyOutput, list, selection });

  // 3. click: toggle a highlight class on the body
  // the click event is listening to mouse clicks on the browser
  // we're connecting this to the btnToggle selection
  btnToggle.addEventListener('click', () => {
    console.log('btn toggle clicked!');
    // add the class to the body
    // classList.toggle adds and removes the highlight class below
    document.body.classList.toggle('highlight');
    // update the text of the button check if it's highlighted
    // and update the text accordingly.
    // do this with classList.contains (which returns a boolean)
    const on = document.body.classList.contains('highlight');

    if (on) { // also write if (on === true) { ... }
      btnToggle.textContent = 'Highlight is: ON';
    } else {
      btnToggle.textContent = 'Highlight is: OFF';
    }
  });

  // 4. click: change message textContent (no HTML parsing)

  // 5. mouseover / mouseout: display hover status on the card

  // 6. keydown: show last key pressed (global listener)

  // 7. Event delegation: one listener on the <ul> for all <li> elements
});
