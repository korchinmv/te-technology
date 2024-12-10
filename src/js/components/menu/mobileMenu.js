import { mobileMenu, burgerButton, overlay, body } from "../../_vars.js";

if (burgerButton) {
  burgerButton.forEach((el) => {
    el.addEventListener("click", () => {
      mobileMenu.classList.toggle("mobile-menu--active");
      el.classList.toggle("hamburger-lines--active");

      if (mobileMenu.classList.contains("mobile-menu--active")) {
        overlay.classList.add("overlay--visible");
        body.classList.add("page__body--no-scroll");
      } else {
        overlay.classList.remove("overlay--visible");
        body.classList.remove("page__body--no-scroll");
      }
    });
  });
}
