
class ProductGallery extends HTMLElement {
  connectedCallback() {
    this.init();
  }

  disconnectedCallback() {
    this.destroy();
  }

  init() {
    this.thumbsEl = this.querySelector(".thumbs-swiper");
    this.mainEl = this.querySelector(".main-swiper");

    if (!this.thumbsEl || !this.mainEl) return;

    // Safety: destroy if re-init
    this.destroy();

    this.thumbsSwiper = new Swiper(this.thumbsEl, {
      direction: "horizontal",
      spaceBetween: 16,
      slidesPerView: 3.5,
      watchSlidesProgress: true,
      slideToClickedSlide: true,
      freeMode: true,
      breakpoints: {
        768: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
        1024: {
          direction: "vertical",
          slidesPerView: 5,
          spaceBetween: 24,
        },
      },
    });

    this.mainSwiper = new Swiper(this.mainEl, {
      allowTouchMove: false,
      navigation: {
        nextEl: this.mainEl.querySelector(".swiper-button-next"),
        prevEl: this.mainEl.querySelector(".swiper-button-prev"),
      },
      thumbs: {
        swiper: this.thumbsSwiper,
      },
    });

    this.initThumbsAccessibility();
  }

  destroy() {
    this.thumbsSwiper?.destroy(true, true);
    this.mainSwiper?.destroy(true, true);
  }

  initThumbsAccessibility() {
    const buttons = this.querySelectorAll(
      ".thumbs-swiper .swiper-slide button"
    );

    buttons.forEach((btn, index) => {
      btn.setAttribute("aria-pressed", index === 0 ? "true" : "false");
      btn.setAttribute("tabindex", index === 0 ? "0" : "-1");

      btn.addEventListener("click", () => {
        this.updateAria(buttons, btn);
      });

      btn.addEventListener("keydown", (e) => {
        let next = index;

        if (e.key === "ArrowRight" || e.key === "ArrowDown") next++;
        if (e.key === "ArrowLeft" || e.key === "ArrowUp") next--;

        if (next < 0) next = buttons.length - 1;
        if (next >= buttons.length) next = 0;

        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          btn.click();
        }

        buttons[next]?.focus();
      });
    });
  }

  updateAria(buttons, active) {
    buttons.forEach((btn) => {
      const isActive = btn === active;
      btn.setAttribute("aria-pressed", isActive);
      btn.setAttribute("tabindex", isActive ? "0" : "-1");
    });
  }
}

customElements.define("product-gallery", ProductGallery);


