import {
  mobileMenu,
  burgerButton,
  btnSearchNavbar,
  overlay,
  navbarMenu,
  body,
  header,
} from "../_vars.js";

overlay.addEventListener("click", () => {
  if (overlay.classList.contains("overlay--visible")) {
    overlay.classList.remove("overlay--visible");
    mobileMenu.classList.remove("mobile-menu--active");

    btnSearchNavbar.classList.remove("mobile-navbar__link--active");
    body.classList.remove("page__body--no-scroll");
    navbarMenu.classList.remove("navbar-menu--active");
    header.style.zIndex = "4";

    burgerButton.forEach((el) => {
      el.classList.remove("hamburger-lines--active");
    });
  }
});
