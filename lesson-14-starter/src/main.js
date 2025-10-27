console.log('Lesson 14 starter loaded');

// make it so that we can use this function
import {
  greetUser,
  getDate
} from './utils';

console.log(greetUser('Dan'));

let dateEl = document.querySelector('#today');

dateEl.textContent = getDate();


