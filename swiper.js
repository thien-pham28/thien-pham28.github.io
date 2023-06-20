var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
