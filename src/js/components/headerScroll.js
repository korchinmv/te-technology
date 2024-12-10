const headerScroll = document.querySelector(".header--scroll");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll <= 220) {
    headerScroll.classList.remove("header--scroll-active");
    return;
  }

  if (currentScroll > lastScroll) {
    headerScroll.classList.remove("header--scroll-active");
  } else if (currentScroll < lastScroll) {
    headerScroll.classList.add("header--scroll-active");
  }

  if (
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight
  ) {
    headerScroll.classList.add("header--scroll-active");
  }

  lastScroll = currentScroll;
});
