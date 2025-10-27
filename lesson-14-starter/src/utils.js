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
  return dayjs().format('DD/MM/YYYY');
}
// I want you to return the formatted date (date only)
// export this, import in the main.js
// I want you to update the html with the current date
// (where it says today)



// with export I'm going to make this function
// importable to another function.
export { greetUser };
