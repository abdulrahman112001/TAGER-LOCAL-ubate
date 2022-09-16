$('.main-carwsel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items:3 ,
    },
    1000: {
      items: 7,
    },
  },
});

let up = document.querySelector('.up');
window.onscroll = function () {
  up.classList.toggle('active', this.scrollY >= 700);
};
up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
},
});
