// Import the functions necessary to make the API calls
import { getData } from './utils';
// note node modules for the above

// Select the necessary DOM elements
let loadButton = document.querySelector('#loadBooks');

// Define the API endpoint
const BACKEND_ENDPOINT = 'http://localhost:3000/books';
// Define a function to handle loading and displaying the list of books
async function loadHandler() {
  try {
    const books = await getData(BACKEND_ENDPOINT);
    console.log(books);
  } catch (error) {
    console.log(error);
  }
}

// Define a function to handle form submission for adding a new book

// Attach event listeners to the button and form
loadButton.addEventListener('click', loadHandler);
// we're letting javascript call not us so don't add the () on the end

// TODO: Add delete functionality
