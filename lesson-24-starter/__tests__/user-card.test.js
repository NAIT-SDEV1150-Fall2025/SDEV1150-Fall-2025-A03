import {
  expect, // a function to pass in what your'e testing
  test, // the test itself.
  describe, // a section of the test
  beforeEach, // this is going to run before each test
  afterEach, // this is going to run after each test
} from 'vitest';

// I need to import the component
import '../src/user-card.js';

let element;

beforeEach(() => {
  // create the element
  element = document.createElement('user-card');
});

afterEach(() => {
  // remove the element from the jsdom
  element.remove();
  // set it to null/undefined.
  element = null;
});

// you can create test sections with describe.
describe('UserCard', () => {
  // let's think about a few
  // tests we can write
  // functionality we'll be testing
  // renders with the right properties
  test('renders with default properties', () => {
    // create the element
    // we removed this line because it's handled in the before each
    // const element = document.createElement('user-card');
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
  test('renders a name and a description.', () => {
    // arrange step
    // we removed this line because it's handled in the before each
    // const element = document.createElement('user-card');
    // add a name span in the slot
    const EXPECTED_NAME = 'gary steves';
    const nameSpan = document.createElement('span');
    nameSpan.setAttribute('slot', 'name');
    nameSpan.textContent = EXPECTED_NAME;
    // add a description span in the slot
    const EXPECTED_DESCRIPTION = 'best character zelda';
    const descSpan = document.createElement('span');
    descSpan.setAttribute('slot', 'description');
    descSpan.textContent = EXPECTED_DESCRIPTION;

    // add these to the element
    element.appendChild(nameSpan);
    element.appendChild(descSpan);

    // ACT
    // add it to the page
    document.body.appendChild(element);

    // assert the results
    // we're going to select the slots on the page and see if they have
    // the same text as us rightnow
    const nameSlot = element.shadowRoot.querySelector('slot[name="name"]');
    const descSlot = element.shadowRoot.querySelector(
      'slot[name="description"]',
    );
    expect(nameSlot.assignedNodes()[0].textContent).toBe(EXPECTED_NAME);
    expect(descSlot.assignedNodes()[0].textContent).toBe(EXPECTED_DESCRIPTION);
  });

  // setting an avatar attribute
  // create the test for this
  test('sets avatar attribute', () => {
    // arrange
    // you're going to need to create the element
    // we removed this line because it's handled in the before each
    // const element = document.createElement('user-card');

    // you're going to set the attribute after the fact (setAttribute) to a random image
    const EXPECTED_IMAGE = 'http://cool.com/holo/charizard.jpg';
    element.setAttribute('avatar', EXPECTED_IMAGE);
    // act
    // add it to the page
    document.body.appendChild(element);
    // assert
    // get the img from the shadow root
    const img = element.shadowRoot.querySelector('img');
    // check to see if src attribute fo the image is set to the random image url above.
    expect(img.getAttribute('src')).toBe(EXPECTED_IMAGE);
  });

  // set a user and see if the component is what we expect
  test('sets user property', () => {
    // arrange step
    // create an "expected" user
    const EXPECTED_USER = {
      id: 'test123456',
      name: 'Daniel Steves',
      description: 'A fake user',
      avatar: 'http://cool.com/holo/charizard.jpg',
    };
    // create an element
    // we removed this line because it's handled in the before each
    // const element = document.createElement('user-card');
    // act
    // set the user on the element  to our "expected user"
    element.user = EXPECTED_USER;
    // add it the page.
    document.body.appendChild(element);
    // assert step
    // check avatar is set
    const img = element.shadowRoot.querySelector('img');
    expect(img.getAttribute('src')).toBe(EXPECTED_USER.avatar);
    // check user id
    expect(element.getAttribute('user-id')).toBe(EXPECTED_USER.id);
    // check the name slot is updated
    const nameSlot = element.shadowRoot.querySelector(
      'slot[name="name"]',
    );
    expect(nameSlot.textContent).toBe(EXPECTED_USER.name);
    // check the description slot is updated
    const descSlot = element.shadowRoot.querySelector(
      'slot[name="description"]',
    );
    expect(descSlot.textContent).toBe(EXPECTED_USER.description);
  });
  // follow and unfollow methods
  // click follow button updates state
});
