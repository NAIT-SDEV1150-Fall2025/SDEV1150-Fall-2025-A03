// Import the user-card component to register the custom element
import './user-card.js';

// we're going to create cards based on these objects.
const users = [
  { id: 'u1', name: 'Zelda', avatar: 'assets/zelda-avatar.png', description: 'Princess of Hyrule' },
  { id: 'u2', name: 'Link', avatar: 'assets/link-avatar.png', description: 'Hero of Hyrule' },
  { id: 'u3', name: 'Mipha', description: 'Zora Champion' },
];

// render the user cards based on this.
const main = document.querySelector('main');
users.forEach((userData) => {
  // create a user card
  const card = document.createElement('user-card');
  // set the user using the properties of user and the setter
  card.user = userData; // this calls the set user(obj) on the class UserCard.
  // attach it to the page.
  main.appendChild(card);
});

// Theme toggle button logic
let dark = false;
const toggleBtn = document.querySelector('#btn-theme');
toggleBtn.addEventListener('click', () => {
  dark = !dark;
  document.documentElement.style.setProperty('--global-card-bg', dark ? '#1f2937' : '#ffffff');
  document.documentElement.style.setProperty('--global-card-color', dark ? '#e5e7eb' : '#222222');
  document.documentElement.style.setProperty('--global-card-accent', dark ? 'gold' : '#0077ff');
  toggleBtn.textContent = dark ? '☀️' : '🌙';
});

let followCount = 0;
// on the main.
// listen to the "follow-change" event
main.addEventListener('follow-change', (event) => {
  // check if the card which will be the event.target
  const element = event.target;
  console.log(`followed ${element.followed}`); // get followed
  console.log('detail of the event', event.detail); // from the dispatch event
  console.log('user on the element', element.user); // using the getter  get user
  // is being followed or not
  if (element.followed) {
    // if it is add 1 to the follow count and display with the element follow-counter
    followCount++; // followCount = followCount + 1;
  } else {
    // if it is not remove 1 to the follow count and display with the element follow-counter
    followCount--; // followCount = followCount - 1;
  }
  // update the display
  const followDisplay = document.querySelector('#follow-counter');
  followDisplay.textContent = `Followed: ${followCount}`;
});
