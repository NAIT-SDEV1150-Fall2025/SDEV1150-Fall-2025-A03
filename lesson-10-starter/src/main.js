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
  // let fullName = formElement.elements.fullName;

  // for formElement.elements.fullName, "fullName"
  // is the "name" attribute on the input.
  // if you want to see what the user entered into
  // the input element you use .value on the inpu.
  // console.log(fullName); // the same thing that you would get from a query selector.
  // console.log(`Fullname value is: ${fullName.value}`);

  // get the email and the bio print it out to the console.
  // let's do email first
  // let email = formElement.elements.email;
  // console.log(`email is: ${email.value}`);
  // bio.
  // let bio = formElement.elements.bio;
  // console.log(`bio is: ${bio.value}`);

  // at the we're going to return everything in an object.
  // object destructuring.
  // we can create variables based on the name using
  // the following technique you don't need to use this
  // if it's confusing just the above.
  let { fullName, bio, email } = formElement.elements;
  // creating three variables at once
  // console.log(`Fullname value is: ${fullName.value}`);
  // console.log(`email is: ${email.value}`);
  // console.log(`bio is: ${bio.value}`);

  // for an input of a radio button you can only select
  // a single option so essentically it's going to be
  // equal to value of the option.
  let plan = formElement.elements.plan;
  // just like before the "plan" is the name of the input
  // console.log(`plan is ${plan.value}`);

  // checkboxes are a bit more difficult.
  // we're going to do this in a couple of steps.
  // 1. we're going to select all of the inputs
  // that are checked I'm going to give you folks this
  // selector and you're just trust we're going to select
  // all inputs with name checkbox that are checked
  // and convert it to an array.
  let checkedTopics = Array.from(document.querySelectorAll(
    'input[name="topics"]:checked',
  ));
  console.log(checkedTopics);


  // return an object of all over the values
  // a way to return multiple values from the
  // object itself.
  return {
    fullName: fullName.value,
    email: email.value,
    bio: bio.value,
    plan: plan.value,
  };
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
  // we're going to access and use those items.

  console.log(`data.fullName is ${data.fullName}`);
  console.log(`data.email is ${data.email}`);
  console.log(`data.bio is ${data.bio}`);
  console.log(`data.plan is ${data.plan}`);
});

// Use 'submit' event on the form, not 'click' on the button
// Prevent default behavior (navigation/reload) using event.preventDefault()

// 4. Handle form reset - reset the result area text when the form is reset
