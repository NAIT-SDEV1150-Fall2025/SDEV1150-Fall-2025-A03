// we're going to create/define a few functions
// to use inside of our main.js
// a really common pattern is to have your function
// defined in a different file than where you're using it.
function greetUser(name) {
  return `Welcome to the app ${name}`;
}

// with export I'm going to make this function
// importable to another function.
export { greetUser };
