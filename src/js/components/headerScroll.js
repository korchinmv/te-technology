const header = document.querySelector(".header");
const headerTop = document.querySelector(".header__top");
const headerMiddle = document.querySelector(".header__middle");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll <= 0) {
    if (header.classList.contains("header--fixed")) {
      headerTop.classList.remove("header__top--hide");
      headerMiddle.classList.remove("header__middle--hide");
      header.classList.remove("header--fixed");
    }
    return;
  }

  if (currentScroll > lastScroll) {
    headerTop.classList.remove("header__top--hide");
    headerMiddle.classList.remove("header__middle--hide");
    header.classList.remove("header--fixed");
  } else if (currentScroll < lastScroll) {
    headerTop.classList.add("header__top--hide");
    headerMiddle.classList.add("header__middle--hide");
    header.classList.add("header--fixed");
  }

  lastScroll = currentScroll;
});
