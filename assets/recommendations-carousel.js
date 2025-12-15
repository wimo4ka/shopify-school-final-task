class RecommendationsCarousel extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.loadRecommendations();
  }
  disconnectCallback() {
    this.setAttribute("aria-busy", "false");
  }

  async loadRecommendations() {
    this.setAttribute("aria-busy", "true");
    try {
      const response = await fetch (
        `${this.dataset.url}&product_id=${this.dataset.productId}&section_id=${this.dataset.sectionId}`
      )
      const text = await response.text();
      const html = document.createElement("div");
      html.innerHTML = text;
      const recommendations = html.querySelector("recommendations-carousel");
      if (recommendations?.innerHTML.trim().length) {
        this.innerHTML = recommendations.innerHTML;
        this.initSwiper();
      }
    }
    catch(e) {
        console.error(e);
    }
    finally {
      this.setAttribute("aria-busy", "false");
    }
  }

  initSwiper() {
    const recommendationsSwiper = new Swiper(
      this.querySelector(".recommendations-carousel__swiper"),
      {
        slidesPerView: 1.2,
        spaceBetween: 16,
        grid: {
          rows: 1,
          fill: "row",
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
            grid: {
              rows: 1,
            },
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 24,
            grid: {
              rows: 1,
            },
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      }
    );
  }
}

if (!customElements.get("recommendations-carousel")) {
  customElements.define("recommendations-carousel", RecommendationsCarousel);
}
