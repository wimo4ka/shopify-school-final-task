class SizePopup extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.openButton = document.querySelector(".size-guide-button");
    this.closeButton = this.querySelector("[data-close]");
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);

    this.openButton.addEventListener("click", this.openDrawer);
    this.closeButton.addEventListener("click", this.closeDrawer);
  }

  disconnectedCallback() {
    this.openButton.removeEventListener("click", this.openDrawer);
    this.closeButton.removeEventListener("click", this.closeDrawer);
  }

  openDrawer() {
    this.setAttribute("open", "");
    document.body.classList.add("no-scroll");
  }

  closeDrawer() {
    this.removeAttribute("open");
    document.body.classList.remove("no-scroll");
  }
}

customElements.define("size-popup", SizePopup);
