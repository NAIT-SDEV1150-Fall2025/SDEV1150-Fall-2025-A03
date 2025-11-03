// Import the functions necessary to make the API calls
import { getData } from './utils';
// note node modules for the above

// Select the necessary DOM elements
let loadButton = document.querySelector('#loadBooks');
let list = document.querySelector('#bookList');

// Define the API endpoint
const BACKEND_ENDPOINT = 'http://localhost:3000/books';
// Define a function to handle loading and displaying the list of books
async function loadHandler() {
  // list element for loading.
  list.innerHTML = `<li>Loading...</li>`;
  // use getData to fetch backend data.
  try {
    // books below is a usable list of js objects.
    const books = await getData(BACKEND_ENDPOINT);
    console.log(books);
    // I'm oging to loop over them and create list elements
    books.forEach((book) => {
      console.log('book', book);
      // creating the element
      const li = document.createElement('li');
      li.textContent = `${book.title} by ${book.author}`;
      console.log('li', li);
      // attach it the list.
      list.appendChild(li);
    });
  } catch (error) {
    console.log(error);
    // render an error list item
  }
}

// Define a function to handle form submission for adding a new book

// Attach event listeners to the button and form
loadButton.addEventListener('click', loadHandler);
// we're letting javascript call not us so don't add the () on the end

// TODO: Add delete functionality
