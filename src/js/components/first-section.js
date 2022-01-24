import Swiper, {
  Navigation,
  Pagination
} from 'swiper';
Swiper.use([Navigation, Pagination]);

var swiper = new Swiper(".slider", {
  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
    clickable: true
  },
});
