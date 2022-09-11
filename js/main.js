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
// sow more
$(function() {
  var increment = 12;
  var startFilter = 0;
  var endFilter = increment;
  var $this = $('.items');
  var elementLength = $this.find('div').length;
  $('.listLength').text(elementLength);

  if (elementLength > 2) {
      $('.buttonToogle').show();
  }
  $('.items .item').slice(startFilter, endFilter).addClass('shown');
  $('.shownLength').text(endFilter);
  $('.items .item').not('.shown').hide();
  $('.buttonToogle .showMore').on('click', function() {
      if (elementLength > endFilter) {
          startFilter += increment;
          endFilter += increment;
          $('.items .item').slice(startFilter, endFilter).not('.shown').addClass('shown').toggle(500);
          $('.shownLength').text((endFilter > elementLength) ? elementLength : endFilter);
          if (elementLength <= endFilter) {
              $(this).remove();
          }
      }

  });
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


try {
  fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
    return true;
  }).catch(function(e) {
    var carbonScript = document.createElement("script");
    carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
    carbonScript.id = "_carbonads_js";
    document.getElementById("carbon-block").appendChild(carbonScript);
  });
} catch (error) {
  console.log(error);
}