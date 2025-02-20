// Подключение свайпера
import Swiper from "swiper";
import { Navigation, Pagination, Thumbs, Autoplay } from "swiper/modules";
Swiper.use([Navigation, Pagination, Thumbs, Autoplay]);

const heroSwiper = new Swiper(".hero__slider", {
  loop: true,
  slidesPerView: 1,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 700,
  autoplay: {
    delay: 3500,
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

const productsHitsSwiper = new Swiper("#products-hits", {
  slidesPerView: 1.1,
  spaceBetween: 24,
  navigation: {
    prevEl: ".products-hits-prev",
    nextEl: ".products-hits-next",
  },
  pagination: {
    el: ".products-hits-pagination",
    type: "progressbar",
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    990: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
  },
});

const productsMonthSwiper = new Swiper("#products-month", {
  slidesPerView: 1.1,
  spaceBetween: 16,
  navigation: {
    prevEl: ".products-month-prev",
    nextEl: ".products-month-next",
  },
  pagination: {
    el: ".products-month-pagination",
    type: "progressbar",
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    990: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
  },
});

const articlesSwiper = new Swiper("#articles", {
  slidesPerView: 1.1,
  spaceBetween: 16,
  navigation: {
    prevEl: ".articles-prev",
    nextEl: ".articles-next",
  },
  pagination: {
    el: ".articles-pagination",
    type: "progressbar",
  },
  breakpoints: {
    1140: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
  },
});
