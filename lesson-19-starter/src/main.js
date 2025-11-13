// Import the user-card component to register the custom element
import './user-card.js';
// Create an additional user card using HTML and append it to the main element
const dynamicUserCard = `
  <user-card avatar="https://placehold.co/80x80/blue/yellow">
    <span slot="name">Daniel</span>
    <span slot="description">Our favourite zelda character</span>
  </user-card>
`;

let main = document.querySelector('main');
main.insertAdjacentHTML('beforeend', dynamicUserCard);

// Create another user card using JavaScript DOM API only and append it to the main element
