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
    </div>
  </div>
`;
document.body.appendChild(template);

class UserCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    // Use the template defined above, no longer need to query the document
    // const template = document.getElementById('user-card-template');
    const content = template.content.cloneNode(true);
    const img = content.querySelector('img');
    img.src = this.getAttribute('avatar') || 'https://placehold.co/80x80/0077ff/ffffff';
    shadow.appendChild(content);
  }

  // watch the changes in an attribute
  static get observedAttributes() {
    // whenever 'avatar' on the <user-card> changes we're
    // listening to it, there might be many, so we make it
    // an array of items.
    return ['avatar'];
  }

  // execute a function when an attribute changes
  attributeChangedCallback(name, oldValue, newValue) {
    // let's take a look
    console.log('attributeChangedCallback');
    console.log(`name: ${name}`);
    console.log(`oldValue: ${oldValue}`);
    console.log(`newValue: ${newValue}`);
    // what we're going to do we are going to keep the
    // image in sync with the newValue here
    // check if we have a shadowRoot, and see if the name
    // is the correct value.
    if (name === 'avatar' && this.shadowRoot) {
      // I'm going to select the image from the shadow root.
      const img = this.shadowRoot.querySelector('img');
      if (img) {
        img.src = newValue;
        // you could also do img.setAttribute('src', newValue)
      }
    }
  }
}
customElements.define('user-card', UserCard);

export default UserCard;
