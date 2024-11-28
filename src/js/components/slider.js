// Подключение свайпера
import Swiper from "swiper";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
Swiper.use([Navigation, Pagination, Thumbs]);

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
