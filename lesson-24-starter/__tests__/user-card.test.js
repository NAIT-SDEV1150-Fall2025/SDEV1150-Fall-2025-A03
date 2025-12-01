import {
  expect, // a function to pass in what your'e testing
  test, // the test itself.
  describe, // a section of the test
} from 'vitest';

// I need to import the component
import '../src/user-card.js';

// you can create test sections with describe.
describe('UserCard', ()=> {

  // let's think about a few
  // tests we can write
  // functionality we'll be testing
  // renders with the right properties
  test('renders with default properties', () => {
    // create the element
    const element = document.createElement('user-card');
    // attatch to the body
    document.body.appendChild(element);

    // ASSERT
    // check the image is what we expect
    const EXPECTED_IMAGE = 'https://placehold.co/80x80/0077ff/ffffff';
    // on the elements shadowRoot, I can select the image
    // if you wanted to make your tests fail before you pass
    // an easy way to do this is add .not in front of toBe
    expect(
      element.shadowRoot.querySelector('img').getAttribute('src'),
    ).toBe(EXPECTED_IMAGE);

    // check the property of followed is false by default
    expect(element.followed).toBe(false);
  });
  // renders with a name and description
  // setting an avatar attribute
  // set a user and see if the component is what we expect
  // follow and unfollow methods
  // click follow button updates state
});

