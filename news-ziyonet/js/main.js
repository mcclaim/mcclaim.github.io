$(document).ready(function () {

    // Video block
    $('.video_items').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.video_items .video_item').each(function(index, element) {
      var href = $(element).find('.video_item_img a').attr('href');
      $(element).magnificPopup({
        items: {
          src: href
        },
        type: 'iframe'
      });
    });

    var a = new StickySidebar('.aside_wrap', {
      topSpacing: 0,
      bottomSpacing: 20,
      containerSelector: '.aside_cont',
      innerWrapperSelector: '.aside_sticky'
    });

  // Header block
  var $window = $(window),
      $card = $('.must_see_wrap'),
      $whenNot = $('.must_see_wrap .slick-list'),
      toggleSlick;

    toggleSlick = function () {
        if ($window.width() <= 480) {
            $card.slick();
        } else {
            $card.slick('unslick');
        }
    }
    toggleSlick2 = function () {
        if ($window.width() <= 480) {
            $card.slick();
        } else {
            if ($whenNot.length) {
              $card.slick('unslick');
            }
        }
    }
    $window.resize(toggleSlick);
    toggleSlick2();

});