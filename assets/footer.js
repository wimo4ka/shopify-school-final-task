function initFooterMenu() {
  const footerButtons = document.querySelectorAll('.footer-button');
  footerButtons.forEach(button => {
    button.addEventListener('click', () => {
      const menuId = button.getAttribute('aria-controls');
      const menuList = document.getElementById(menuId);

      menuList.classList.toggle('is-active');
      const isExpanded = button.getAttribute('aria-expanded') === 'true' || false;
      button.setAttribute('aria-expanded', !isExpanded);
    });
  });
}

initFooterMenu()