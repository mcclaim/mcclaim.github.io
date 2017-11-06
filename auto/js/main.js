$(document).ready(function() {
  // Slider
  $('.slider__wrapper').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  // Mask for input
  jQuery(function($){
    var validTel = function(el) {

      if (!el) {
        el.addClass('error');
        return false;
      }

      var message = el.parent().find('.error-message');

      var clear = el.val().replace(/[-+()_\s]/g, '');
      if (clear[1] == '7' || clear[1] == '8' || clear.length != 11) {
        el.addClass('error');
        message.fadeIn(500).delay(5000).fadeOut(500);

        return false;
      }

      el.removeClass('error');
      message.hide();
      return true;
    }

    $('.tell').focus(function(){
      $(this).removeClass('error');
      $(this).parent().find('.error-message').hide();
    });

    $('.tell')
      .parent()
      .prepend('<div class="error-message">Неверный номер телефона</div>');
    $('.tell').parent().find('.error-message').hide();

    $('.tell').mask("+7 (999) 999-99-99", {
      autoclear : false,
      });

    $('form').submit(function(e){
          var tel = $(this).find('.tell');

          if (!validTel(tel)) {

            e.preventDefault();
            return false;
          }
      });
   });

    // Google map 1
    function initMap() {
      var coordinates = {lat: 47.212325, lng: 38.933663},
          popupContent = '<p class="content">Что угодно</p>',
          markerImage = 'images/marker.png',

          map = new google.maps.Map(document.getElementById('map1'), {
              center: {lat: 55.730996, lng: 37.636389}
          }),

          marker = new google.maps.Marker({
              position: coordinates,
              map: map,
              icon: markerImage
          }),

          infowindow = new google.maps.InfoWindow({
              content: popupContent
          });
    }

    // Спуск до якоря
    $(document).on("click","a#feedback_btn", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1100);
    });

});
