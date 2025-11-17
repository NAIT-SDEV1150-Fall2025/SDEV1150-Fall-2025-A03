// Import the user-card component to register the custom element
import './user-card.js';

// Create an additional user card using HTML and append it to the main element
const dynamicUserCard = `
    <user-card avatar="https://placehold.co/80x80/7700ff/ffffff">
      <span slot="name">Mipha</span>
      <span slot="description">Zora Champion</span>
    </user-card>`;

document.querySelector('main').insertAdjacentHTML('beforeend', dynamicUserCard);

// Create another user card using JavaScript DOM API only and append it to the main element
const anotherUserCard = document.createElement('user-card');
anotherUserCard.setAttribute('avatar', 'https://placehold.co/80x80/770000/ffffff');
const nameSpan = document.createElement('span');
nameSpan.setAttribute('slot', 'name');
nameSpan.textContent = 'Yunobo';
const descSpan = document.createElement('span');
descSpan.setAttribute('slot', 'description');
descSpan.textContent = 'President of YunoboCo';
anotherUserCard.appendChild(nameSpan);
anotherUserCard.appendChild(descSpan);

document.querySelector('main').appendChild(anotherUserCard);
// Why doesn't the custom avatar show up for this element?

// we're going to
// create a button
const toggleBtn = document.createElement('button');
toggleBtn.textContent = 'Toggle Theme';
// attach it to the document.body
document.body.prepend(toggleBtn);
// create a boolean variable called dark
let dark = false;
// add click event listener
toggleBtn.addEventListener('click', () => {
  // set it to the opposite
  dark = !dark;
  let bg = '#ffffff';
  let color = '#222222';
  let accent = '#0077ff';
  if (dark) {
    bg = '#1f2937';
    color = '#e5e7eb';
    accent = 'gold';
  }

  // on the document.documentElement
  // I want to you set the style property
  // for the --global-card-bg to be
  // #1f2937 if dark
  // and #ffffff if white.
  document.documentElement.style.setProperty(
    '--global-card-bg', bg,
  );
  document.documentElement.style.setProperty(
    '--global-card-color', color,
  );
  document.documentElement.style.setProperty(
    '--global-card-accent', accent,
  );
});
