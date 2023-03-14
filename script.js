const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 15,

  breakpoints: {
    768: {
      spaceBetween: 30,
    },
  },

  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});
