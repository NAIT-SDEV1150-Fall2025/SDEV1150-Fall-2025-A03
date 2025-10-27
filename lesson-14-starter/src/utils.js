// import dayjs so that I can use it in my code.
import dayjs from 'dayjs';

// we're going to create/define a few functions
// to use inside of our main.js
// a really common pattern is to have your function
// defined in a different file than where you're using it.
function greetUser(name) {
  return `Welcome to the app ${name}`;
}

// I want you to stop the server with ctrl c
// install dayjs
// I want you to create a function called getDate
// Note: you can use export in front of the function
// definition and it will be have the same way as the
// other export method.
export function getDate() {
  return dayjs().format('D MMM YY');
}
// I want you to return the formatted date (date only)
// export this, import in the main.js
// I want you to update the html with the current date
// (where it says today)

// three mins do the time!
// getTime function
// update the time element
// update the greet element with the greeting.
export function getTime() {
  return dayjs().format('HH:mm:ss');
}

// note for the dayjs function you can refer
// here for the docs: https://day.js.org/docs/en/display/format

// with export I'm going to make this function
// importable to another function.
export { greetUser };

// there's name exports like above
// and you can have as many as you'd like
// of these in a file.

// there's also DEFAULT exports where
// you only get one.
export default function getDefaultUser() {
  return 'gary';
}
