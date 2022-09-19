$('.main-carwsel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    rtl:true,
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
    rtl:true,

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