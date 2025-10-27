console.log('Lesson 14 starter loaded');
// let's import the animate from animejs
import { animate } from 'animejs'

// make it so that we can use this function
import {
  greetUser,
  getDate,
  getTime,
} from './utils';

console.log(greetUser('Dan'));

let dateEl = document.querySelector('#today');
let timeEl = document.querySelector('#time');
let greetEl = document.querySelector('#greet');

// we're just using the functions that we've defined
// in the utils.js
dateEl.textContent = getDate();
timeEl.textContent = getTime();
// let's just our greeting
greetEl.textContent = greetUser('Dan');

// we're going to use
animate(
  '#greet', // first argument is the target.
  {
    translateY: [-20, 0],
    opacity: [0, 1],
    duration: 5000,
    easing: 'easeOutQuad',
  },
);
