$('.main-carwsel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
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
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
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
// $(window).scroll(function() {
//   if ($(this).scrollTop() >= 100) {
//     $('#return-to-top').fadeIn(200);
//   } else {
//     $('#return-to-top').fadeOut(200);
//   }
// });
// $('#return-to-top').on('click', function() {
//   $('body,html').animate(
//     {
//       scrollTop: 0,
//     },
//     500
//   );
// });
