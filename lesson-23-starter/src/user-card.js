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
  // a private property
  #followed = false;
  #user = null;

  constructor() {
    super();

    // Added property to track follow state
    this.#followed = false;
    // add a user variable
    this.#user = false;

    // bind on event handler
    this._onButtonClick = this._onButtonClick.bind(this);

    const shadow = this.attachShadow({ mode: 'open' });
    const content = template.content.cloneNode(true);

    // _img accessible as a property.
    const img = content.querySelector('img');
    this._img = img;
    // remove the event handler because we're going to add this
    // with lifecycle methods.
    // img.src = this.getAttribute('avatar') || 'https://placehold.co/80x80/0077ff/ffffff';

    // _btn accessible as a property.
    this._btn = content.querySelector('button');
    // remove the event handler because we're going to add this
    // with lifecycle methods.
    // this._btn.addEventListener('click', () => this._onFollow());
    shadow.appendChild(content);
  }

  _onButtonClick() {}

  // set the card to all of the values from the object.
  _renderFromUser() {
    console.log(this.#user);
    // a quick check if the internal state of user exists
    if (this.#user) {
      // populate the card itself from the internal state
      // handle the avatar
      if (this.#user.avatar) {
        this._img.src = this.#user.avatar;
      } else {
        this._img.src = 'https://placehold.co/80x80/0077ff/ffffff';
      }
      // handle the user id
      // name
      // description.
    }
  }

  // we're going to create some getters and setters for
  // a new property that is public called "user" where
  // a developer can set the user to an object and it will
  // render that object.
  set user(obj) {
    // this obj is going to take the shape of
    // { user-id, name, description, avatar }
    // we're going to set the obj to the state.
    this.#user = obj; // this is object is now the internal state
    // we are going to render the card by the user object.
    this._renderFromUser();
  }

  // be the property that exposes the internal state.
  // be accessed with .user
  get user() {
    return this.#user;
  }


  follow() {
    this._setFollow(true);
  }

  unfollow() {
    this._setFollow(false);
  }

  // Property to read followed state
  get followed() {
    return this.#followed;
  }

  _setFollow(value) {
    this.#followed = value;
    this._btn.textContent = this.#followed ? 'Following' : 'Follow';
    this.dispatchEvent(new CustomEvent('follow-change', {
      detail: {
        id: this.getAttribute('user-id') || null,
        followed: this.#followed,
      },
      bubbles: true,
      composed: true,
    }));
  }

  // Follow button handler
  _onFollow() {
    this._setFollow(!this.#followed);
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
