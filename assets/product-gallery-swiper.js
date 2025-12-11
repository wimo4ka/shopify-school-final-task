document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".product-gallery-section");
    const thumbsEl = section.querySelector(".thumbs-swiper");
    const mainEl = section.querySelector(".main-swiper");
    if (!thumbsEl || !mainEl) return;

    const thumbsSwiper = new Swiper(thumbsEl, {
        direction: "horizontal",
        spaceBetween: 16,
        slidesPerView: 3.5,
        watchSlidesProgress: true,
        slideToClickedSlide: true,
        freeMode: true,
        breakpoints: {
        768: {
            direction: "horizontal",
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

    const mainSwiper = new Swiper(mainEl, {
        spaceBetween: 0,
        allowTouchMove: false,
        navigation: {
          nextEl: mainEl.querySelector(".swiper-button-next"),
          prevEl: mainEl.querySelector(".swiper-button-prev"),
        },
        thumbs: {
          swiper: thumbsSwiper,
        },
    });

    // Add accessibility to thumbs ---
  function initThumbsAccessibility() {
    const thumbButtons = section.querySelectorAll(
      ".thumbs-swiper  .swiper-wrapper .swiper-slide button"
    );
    if (!thumbButtons.length) return;

    thumbButtons.forEach((btn, index) => {
      // Start state
      btn.setAttribute("aria-pressed", index === 0 ? "true" : "false");
      btn.setAttribute("tabindex", index === 0 ? "0" : "-1");

      // Click
      btn.addEventListener("click", () => {
        updateThumbsAria(thumbButtons, btn);
      });

      // Keyboard
      btn.addEventListener("keydown", (e) => {
        let newIndex = index;

        if (e.key === "ArrowRight" || e.key === "ArrowDown") newIndex++;
        if (e.key === "ArrowLeft" || e.key === "ArrowUp") newIndex--;

        if (newIndex < 0) newIndex = thumbButtons.length - 1;
        if (newIndex >= thumbButtons.length) newIndex = 0;

        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          btn.click();
        }

        if (newIndex !== index) {
          thumbButtons[newIndex].focus();
        }
      });
    });
  }

  // --- Update aria-pressed for thumbs ---
  function updateThumbsAria(buttons, activeBtn) {
    buttons.forEach((btn) => {
      btn.setAttribute("aria-pressed", btn === activeBtn ? "true" : "false");
      btn.setAttribute("tabindex", btn === activeBtn ? "0" : "-1");
    });
  }

  initThumbsAccessibility();
});