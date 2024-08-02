(function ($) {
  "use strict";
  
  // menu fixed js code
  var prevScrollpos = window.scrollY;
  $(window).scroll(function () {
    var currentScrollPos = window.scrollY;
    
    // if user is scrollig up and is at least 50 pixels far from the very top 
    if (prevScrollpos > currentScrollPos && currentScrollPos > 50)  {
      $('.main_menu').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.main_menu').removeClass('menu_fixed animated fadeInDown');
    }
    prevScrollpos = currentScrollPos;
  });


  // Flags hall of fame slider
  var client_logo = $('.client_logo_slider')
  if (client_logo.length) {
    client_logo.owlCarousel({
      items: 4,
      // autoWidth:true,
      stagePadding: 10,
      loop: true,
      autoplay: true,
      slideTransition: 'linear',
      autoplayTimeout: 3000,
      autoplaySpeed: 3000,
      autoplayHoverPause: true,
      margin: 10,
      responsive: {
        0: {
          items: 2,margin: 0,
        },
        540: {
          items: 3,margin: 0,
        },
        768: {
          items: 4,margin: 0,
        },
        991: {
          items: 5,margin: 0,
        },
        1200: {
          items: 7,margin: 0,
        }
      }
    }, 3);
  }

  $('.popup-youtube').magnificPopup({
    type: 'iframe',
  });

  var review = $('.live_streams_slide');
  if (review.length) {
    review.owlCarousel({
      items: 2,
      loop: true,
      dots: false,
      autoplay: true,
      slideTransition: 'linear',
      autoplayTimeout: 3000,
      autoplaySpeed: 3000,
      autoplayHoverPause: true,
      nav: false,
      navText: [
        '<i class="fas fa-caret-left"></i>',
        '<i class="fas fa-caret-right"></i>'
      ],
      margin: 15,
      responsive: {
        0: {
          items: 1,
          margin: 15,
        },
        600: {
          items: 2,
          margin: 15,
        },
        991: {
          items: 3,
          margin: 15,
        },
        1200: {
          items: 3,
          margin: 15,
        }
      }
    });
  }

  //------- Mailchimp js --------//  
  function mailChimp() {
    $('#mc_embed_signup').find('form').ajaxChimp();
  }
  mailChimp();

}(jQuery));