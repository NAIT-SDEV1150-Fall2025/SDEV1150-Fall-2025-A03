console.log('Lesson 10 starter loaded');

// 1. Select required elements
const form = document.querySelector('#contact-form');
const result = document.querySelector('#result');

// 2. Function to gather and structure form data
function serializeData(formElement) {
  // let's take a look at all of the form elements
  // console.log(formElement.elements);
  // below we're going to access the elements and
  // get the values from the inputs so we can use
  // them in our application.
  // let's focus on text based inputs first.
  let fullName = formElement.elements.fullName;
  // for formElement.elements.fullName, "fullName"
  // is the "name" attribute on the input.
  // if you want to see what the user entered into
  // the input element you use .value on the inpu.
  // console.log(fullName); // the same thing that you would get from a query selector.
  console.log(`Fullname value is: ${fullName.value}`);

  // get the email and the bio print it out to the console.
  // let's do email first
  let email = formElement.elements.email;
  console.log(`email is: ${email.value}`);

  let bio = formElement.elements.bio;
  console.log(`bio is: ${bio.value}`);
}

// Access values using both form.elements and query selectors

// 3. Handle form submission

form.addEventListener('submit', (event) => {
  // you need to have the event object passed in
  // so that we can prevent the form from submitting
  // to the server.
  event.preventDefault();

  // we're going to get the data from the form.
  const data = serializeData(form);
});

// Use 'submit' event on the form, not 'click' on the button
// Prevent default behavior (navigation/reload) using event.preventDefault()

// 4. Handle form reset - reset the result area text when the form is reset
