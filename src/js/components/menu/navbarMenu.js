import {
  navbarMenu,
  navbarMenuBtnClose,
  btnSearchNavbar,
  navbarMenuInput,
  overlay,
  body,
  header,
} from "../../_vars.js";

if (btnSearchNavbar) {
  btnSearchNavbar.addEventListener("click", () => {
    navbarMenu.classList.toggle("navbar-menu--active");
    btnSearchNavbar.classList.toggle("mobile-navbar__link--active");
    navbarMenuInput.focus();

    if (navbarMenu.classList.contains("navbar-menu--active")) {
      overlay.classList.add("overlay--visible");
      body.classList.add("page__body--no-scroll");
      header.style.zIndex = "2";
    } else {
      overlay.classList.remove("overlay--visible");
      body.classList.remove("page__body--no-scroll");
      header.style.zIndex = "4";
    }
  });

  navbarMenuBtnClose.addEventListener("click", () => {
    navbarMenu.classList.remove("navbar-menu--active");
    btnSearchNavbar.classList.remove("mobile-navbar__link--active");
    overlay.classList.remove("overlay--visible");
    body.classList.remove("page__body--no-scroll");
    header.style.zIndex = "4";
  });
}
