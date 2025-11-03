// Import the functions necessary to make the API calls
import { getData, postData } from './utils';
// note node modules for the above

// Select the necessary DOM elements
const loadButton = document.querySelector('#loadBooks');
const list = document.querySelector('#bookList');
const addBook = document.querySelector('#addBook');

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
    // clean the loading in a lazy way
    list.innerHTML = '';
    // I'm oging to loop over them and create list elements
    books.forEach((book) => {
      console.log('book', book);
      // creating the element
      const li = document.createElement('li');
      li.textContent = `${book.title} by ${book.author}`;
      console.log('li', li);
      // attach it the list.
      list.appendChild(li);
      console.log('-----------------');
    });
  } catch (error) {
    console.log(error);
    // render an error list item
    list.innerHTML = `<li style="color: red;">${error}</li>`;
  }
}

// Define a function to handle form submission for adding a new book
async function submitHandler(event) {
  event.preventDefault();
  // let's get the data from the form in
  // a bit of a different way
  const form = event.target;
  // the form data Class
  const formData = new FormData(form);
  // create the json from the formdata entries
  console.log(formData);
  // let's extract the js object from form data
  const data = Object.fromEntries(
    formData.entries(),
  );
  // above is a quick way to get data from the form.
  data['year'] = Number(data['year']);
  console.log(data);
  try {
    // post to the server, with the payload
    await postData(BACKEND_ENDPOINT, data);
    // call my load handler to refresh the data on
    // the page.
    loadHandler();
    // the load handler will refresh the data
    // reset the form.
    form.reset();
  } catch (error) {
    console.error(error);
    // this is the bare minimum that you can have in a
    // try catch.
  }
}

// Attach event listeners to the button and form
loadButton.addEventListener('click', loadHandler);
// we're letting javascript call not us so don't add the () on the end
addBook.addEventListener('submit', submitHandler);
// TODO: Add delete functionality
