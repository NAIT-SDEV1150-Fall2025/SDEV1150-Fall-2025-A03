// user-card.test.js
import { expect, test, describe, beforeEach, afterEach } from 'vitest';

import '../src/user-card.js'; // Import the web component definition
let element;

beforeEach(() => {
  // Set up a new instance of the component before each test
  element = document.createElement('user-card');
});

afterEach(() => {
  // Clean up after each test
  element.remove();
  element = null;
});

describe('UserCard', () => {
  test('renders with default properties', () => {
    // Act
    document.body.appendChild(element);

    // Assert
    expect(element.shadowRoot.querySelector('img').getAttribute('src')).toBe('https://placehold.co/80x80/0077ff/ffffff');
    expect(element.followed).toBe(false);
  });

  test('renders name and description', async () => {
    // Arrange
    const element = document.createElement('user-card');
    const nameSpan = document.createElement('span');
    nameSpan.setAttribute('slot', 'name');
    nameSpan.textContent = 'Vitest User';

    const descSpan = document.createElement('span');
    descSpan.setAttribute('slot', 'description');
    descSpan.textContent = 'A user for testing with Vitest';

    element.appendChild(nameSpan);
    element.appendChild(descSpan);

    // Act
    document.body.appendChild(element);

    // Assert the result
    const nameSlot = element.shadowRoot.querySelector('slot[name="name"]');
    const descSlot = element.shadowRoot.querySelector('slot[name="description"]');
    expect(nameSlot.assignedNodes()[0].textContent).toBe('Vitest User');
    expect(descSlot.assignedNodes()[0].textContent).toBe('A user for testing with Vitest');
  });

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
    const element = document.createElement('user-card');
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
});
