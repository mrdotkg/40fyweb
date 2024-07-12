(function ($) {
  "use strict";

  $(document).ready(function () {
    $('select').niceSelect();
  });
 
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
  
  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });

  var client_logo = $('.client_logo_slider')
  if (client_logo.length) {
    client_logo.owlCarousel({
      items: 6,
      loop: true,
      responsive: {
        0: {
          items: 3,
          margin: 15,
        },
        600: {
          items: 3,
          margin: 15,
        },
        991: {
          items: 5,
          margin: 15,
        },
        1200: {
          items: 6,
          margin: 15,
        }
      }
    });
  }


  $('.img-gal, .popup-youtube').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  $('.popup-youtube').magnificPopup({
    type: 'iframe',
  });

  var client_logo = $('.client_logo_slider')
  if (client_logo.length) {
    client_logo.owlCarousel({
      items: 6,
      loop: true,
      responsive: {
        0: {
          items: 3,
          margin: 15,
        },
        600: {
          items: 3,
          margin: 15,
        },
        991: {
          items: 5,
          margin: 15,
        },
        1200: {
          items: 6,
          margin: 15,
        }
      }
    });
  }

  var review = $('.live_stareams_slide');
  if (review.length) {
    review.owlCarousel({
      items: 3,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: true,
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
          items: 1,
          margin: 15,
        },
        991: {
          items: 1,
          margin: 15,
        },
        1200: {
          items: 2,
          margin: 15,
        }
      }
    });
  }

  function makeTimer() {
    //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
    var endTime = new Date("24 sep 2019 9:56:00 GMT+06:00");
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);

    if (hours < "10") {
      hours = "0" + hours;
    }

    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");

  }

  setInterval(function () {
    makeTimer();
  }, 1000);

  //------- Mailchimp js --------//  
  function mailChimp() {
    $('#mc_embed_signup').find('form').ajaxChimp();
  }
  mailChimp();


}(jQuery));