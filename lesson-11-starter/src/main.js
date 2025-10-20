console.log('Lesson 10 starter loaded');

const form = document.querySelector('#contact-form');
const result = document.querySelector('#result');

function serializeForm(formEl) {
  const { fullName, email, bio } = formEl.elements;

  const plan = formEl.elements.plan.value;

  const topics = Array.from(formEl.querySelectorAll('input[name="topics"]:checked'))
    .map(cb => cb.value);

  return {
    fullName: fullName.value.trim(),
    email: email.value.trim(),
    plan,
    topics,
    bio: bio.value.trim(),
    submittedAt: new Date().toLocaleString(),
  };
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = serializeForm(form);

  result.textContent
    = `Submission received:
      - Name: ${data.fullName || '(none)'}
      - Email: ${data.email || '(none)'}
      - Skill: ${data.plan || '(none)'}
      - Strengths: ${data.topics.length ? data.topics.join(', ') : '(none)'}
      - Bio: ${data.bio || '(none)'}
      - Time: ${data.submittedAt}`;
});

form.addEventListener('reset', () => {
  result.textContent = 'Awaiting submission...';
});

// 1. Add validation logic to the form on 'input' events
// I want you to put an event listener on the form that will listen to input events.
form.addEventListener('input', (event) => {
  // console.log the event.target in the console.
  const element = event.target; // remember this is the same as getting it with querySelector
  console.log(element);

  // console.log the name of the selected element in the console.
  console.log(`element name: ${element.name}`);
  console.log(`element value: ${element.value}`);
  // 1.1 custom validation for fullName (must contain two words)
  // if the element's name is "fullName"
  if (element.name === 'fullName') {
    // I want you to check that it's got
    // two parts (a space in between)
    const parts = element.value.trim().split(' ');
    if (parts.length < 2) {
      // add a custom error message that "Full name must contain at least two words"
      // here's where we add our own custom validity
      element.setCustomValidity('Full name must contain at least two words');
    } else {
      // clear the error message if it's valid

    }
    // I want you to show the error message.
    // use docs here: https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity
  }

  // 1.2 custom validation for bio (minimum length)

  // 1.3 custom validation for email (basic pattern check)

  // 1.4 report the validity status to the user
});
