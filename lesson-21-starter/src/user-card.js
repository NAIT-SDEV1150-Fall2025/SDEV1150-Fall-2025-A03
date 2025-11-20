// Self-contained user card web component with Shadow DOM
const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      --card-bg: var(--global-card-bg, #ffffff);
      --card-color: var(--global-card-color, #222222);
      --card-accent: var(--global-card-accent, #0077ff);
      display: block;
    }
    .card {
      background: var(--card-bg);
      color: var(--card-color);
      border: 1px solid #e6e6e6;
      padding: 12px;
      border-radius: 8px;
      display: flex;
      gap: 12px;
      align-items: center;
      width: 320px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
    }
    .name {
      color: var(--card-accent);
      display: block;
      font-size: 1.2em;
      font-weight: bold;
      margin: 0;
    }
    .description {
      font-size: 0.9rem;
      color: #666;
      display: block;
      margin-top: 4px;
    }
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      flex: 0 0 80px;
    }
  </style>

  <div class="card">
    <img src="" width="80" height="80" alt="avatar">
    <div class="info">
      <slot name="name" class="name"></slot>
      <slot name="description" class="description"></slot>
      <button>Follow</button>
    </div>
  </div>
`;
document.body.appendChild(template);

class UserCard extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const content = template.content.cloneNode(true);
    const img = content.querySelector('img');
    img.src = this.getAttribute('avatar') || 'https://placehold.co/80x80/0077ff/ffffff';

    // we're going to add a state for the follow
    // just like python a _ in front suggests that
    // it's a private variable and you should use the
    // setter function to set this variable.
    this._followed = false;

    // create a variable on this called _btn select it
    // from the content
    // add an event listener of click
    // use this._setFollow to set it to the opposite value
    // console.log that the button was clicked.
    this._btn = content.querySelector('button');
    this._btn.addEventListener('click', () => {
      // sets it to the opposite
      this._onFollow();
      console.log('Followed clicked: ', this._followed);
    });

    // shadow at the bottom.
    shadow.appendChild(content);
  }

  // using _ in classes is a syntax to make functions privateIsh
  _setFollow(value) {
    // a note "this" in javascript is the same as "self"
    // in python.
    this._followed = value;

    // with the setter we're also going to update the button
    this._btn.textContent = this._followed ? 'Unfollow' : 'Follow';

    // dispatch an event.
    // we're going to use a built in function that we inherited
    // called dispatchEvent
    // we're going to pass in a CustomEvent which takes two arguments
    this.dispatchEvent(new CustomEvent(
      'follow-change', // this is the name of our current event here
      { // the second argument is an object that allows us to pass data out.
        detail: {
          followed: this._followed,
          id: this.getAttribute('user-id') || null,
        },
        bubbles: true, // our event bubbles up by default.
        composed: true, // our component can span shadow doms
      },
    ));
  }

  // let's create our toggle follow function
  _onFollow() {
    this._setFollow(!this._followed);
  }

  // let's create some functions that are going to be accessed on the element itself.
  // create a follow function
  // and unfollow function.
  follow() {
    this._setFollow(true);
  }

  unFollow() {
    this._setFollow(false);
  }

  // Respond to attribute changes if needed in the future
  static get observedAttributes() {
    return ['avatar'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'avatar' && this.shadowRoot) {
      const img = this.shadowRoot.querySelector('img');
      if (img) {
        img.src = newValue;
      }
    }
  }
}

customElements.define('user-card', UserCard);

export default UserCard;
