
class SizeSelect extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.content = document.querySelector(".main-product-section");
    this.sizeButtons = document.querySelectorAll(".size-button");
    this.handleClick = this.handleClick.bind(this);
    this.sectionId = this.content.dataset.sectionId;
    this.sizeButtons.forEach((button) => {
      button.addEventListener("click", this.handleClick);
    });
  }
  disconnectedCallback() {
    this.sizeButtons.forEach((button) => {
      button.removeEventListener("click", this.handleClick);
    });
  }
  async handleClick(event) {
        event.preventDefault();
        const button = event.currentTarget;
        const productUrl = button.dataset.url.split('?')[0];
        const variantId = button.dataset.variantId;
        const url = `${productUrl}?variant=${variantId}&section_id=${this.sectionId}`;
        try {
          const response = await fetch(url);
          const html = await response.text();
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = html;
          const newSection = tempDiv.querySelector(".main-product-section .container");
          this.content.innerHTML = "";
          if (newSection) this.content.appendChild(newSection);
        }
        catch (error) {
          console.error("Error updating product:", error);
        }
    }
}

customElements.define('size-select', SizeSelect);