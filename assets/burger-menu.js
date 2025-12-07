class BurgerMenu extends HTMLElement {
  constructor() {
    super();
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  connectedCallback() {
    this.button = this.querySelector('.burger-btn');
    this.menu = this.querySelector('#mobile-menu');

    if (!this.button || !this.menu) return;

    this.button.addEventListener('click', this.toggleMenu);
  }

  disconnectedCallback() {
    this.button?.removeEventListener('click', this.toggleMenu);
  }

  toggleMenu() {
    const isHidden = this.menu.classList.contains('tw:hidden');

    this.menu.classList.toggle('tw:hidden');
    this.button.classList.toggle('tw:hidden');
    this.button.setAttribute('aria-expanded', String(!isHidden));
    }
}

customElements.define('burger-menu', BurgerMenu);