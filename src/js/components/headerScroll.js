import { main } from "../_vars.js";

const header = document.querySelector(".header");
const headerTop = document.querySelector(".header__top");
const headerMiddle = document.querySelector(".header__middle");

const scrollFunction = () => {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    headerTop.classList.add("header__top--hide");
    headerMiddle.classList.add("header__middle--hide");
    header.classList.add("header--fixed");
    main.style.paddingTop = "80px";
  } else {
    headerTop.classList.remove("header__top--hide");
    headerMiddle.classList.remove("header__middle--hide");
    header.classList.remove("header--fixed");
    main.style.paddingTop = "276px";
  }
};

window.onscroll = function () {
  scrollFunction();
};
