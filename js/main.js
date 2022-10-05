
let search = document.getElementById("serach-input")
$('#serach-input').keyup(function(){
  $('#menu-selsect').addClass('dblock') +  $('#menu-selsect').removeClass("dnone")
    if(search.value.length == 0 ){
      $('#menu-selsect').addClass('dnone') +  $('#menu-selsect').removeClass("dblock")
    }
  $('body').click(function(){
    $('#menu-selsect').addClass('dnone') +  $('#menu-selsect').removeClass("dblock")
  })
})

$('.main-carwsel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  loop:true,
  // autoplay:true,
  // autoplayTimeout:1000,
  // autoplayHoverPause:true,
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
  loop:true,
  // autoplay:true,
  // autoplayTimeout:1000,
  // autoplayHoverPause:true,
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
// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 10,
//   slidesPerView: 4,
//   freeMode: true,
//   watchSlidesProgress: true,
// });
// var swiper2 = new Swiper(".mySwiper2", {
//   spaceBetween: 10,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   thumbs: {
//     swiper: swiper,
// },
// });
// $('.list5').showMoreItems({
//   startNum:12,
//   afterNum:10,
//   original:true,
//   responsive: [
//     {
//       breakpoint: 1280,
//       settings: {
//       startNum:12,
//       afterNum:10,
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//       startNum:12,
//       afterNum:10,
//       }
//     }
//   ]
// });

$(".datepicker").datepicker({ dateFormat: "D dd M yy" });
$(".horizontal-datepicker").datepicker({ dateFormat: "dd M yy" });
