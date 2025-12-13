
class ColorPicker extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.content = document.querySelector(".main-product-section");
    this.colorButtons = document.querySelectorAll(".color-button");
    this.handleClick = this.handleClick.bind(this);
    this.sectionId = this.content.dataset.sectionId;
    this.colorButtons.forEach((button) => {
      button.addEventListener("click", this.handleClick);
    });
  }
  disconnectedCallback() {
    this.colorButtons.forEach((button) => {
      button.removeEventListener("click", this.handleClick);
    });
  }
  async handleClick(event) {
        event.preventDefault();
        const button = event.currentTarget;
        const productUrl = button.dataset.url.split('?')[0];
        const url = `${productUrl}?section_id=${this.sectionId}`;
        console.log(url)
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

customElements.define('color-picker', ColorPicker);