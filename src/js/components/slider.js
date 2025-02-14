// Подключение свайпера
import Swiper from "swiper";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
Swiper.use([Navigation, Pagination, Thumbs]);

const heroSwiper = new Swiper(".hero__slider", {
  loop: true,
  slidesPerView: 1,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 700,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".hero__slider-controls-next",
    prevEl: ".hero__slider-controls-prev",
  },
  pagination: {
    el: ".hero__pagination",
    clickable: true,
    type: "bullets",
    renderBullet: function (index, className) {
      return (
        '<span class="' + className + '">' + "<i></i>" + "<b></b>" + "</span>"
      );
    },
  },
});

const clientsSwiper = new Swiper(".clients__slider", {
  slidesPerView: 2,
  spaceBetween: 16,
  navigation: {
    nextEl: ".clients__slider-controls-next",
    prevEl: ".clients__slider-controls-prev",
  },
  pagination: {
    el: ".clients__pagination",
    type: "progressbar",
  },
  breakpoints: {
    // when window width is >= 990px
    990: {
      slidesPerView: 4,
      spaceBetween: 24,
    },

    630: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});
