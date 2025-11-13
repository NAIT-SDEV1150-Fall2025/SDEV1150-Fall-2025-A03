// let's move this template inside
const template = document.createElement('template');
template.innerHTML = `
  <style>
  .card {
    background: #ffffff;
    color: #222222;
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
    font-size: 1.2em;
    font-weight: bold;
    margin: 0;
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

// we are going create a class that will
// extend all of the functionality from HTMLElement
class UserCard extends HTMLElement {
  // special function that gets called when you create a card
  constructor() {
    // this is the method that is called every time you create
    // a new object
    super(); // calling the constructor method on HTMLElement.
    // this in javascript refers to the object itself.

    // shadow dom makes a dom that's isolated from the main dom.
    // we create this wit hthe following line
    const shadow = this.attachShadow({ mode: 'open' });

    // we're going to clone the template (create a copy)
    // const template = document.getElementById('user-card-template');
    const content = template.content.cloneNode(true);

    // we're going to get the image element using our querySelector on content
    const image = content.querySelector('img');
    // using the this.getAttribute to put this or a placeholder.
    console.log(this.getAttribute('avatar') || 'https://placehold.co/80x80');
    // this.getAttribute('avatar') looks at the avatar
    // property on the html card <user-card avatar="...">...

    // let's set the src of the image
    image.src = this.getAttribute('avatar') || 'https://placehold.co/80x80';

    // attach this to the shadow node so we have a copy to work with
    shadow.appendChild(content);
  }
}

// in javascript you can "register" elements with html with the
// customElements api (not rest api)
customElements.define('user-card', UserCard);
// the above is used so that we can create elements in our html
// now using <user-card></user-card>

export default UserCard;
