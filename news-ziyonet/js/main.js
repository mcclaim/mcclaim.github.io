$(document).ready(function () {

    // Sticky Sidebar

    var window_width = $( window ).width();

    if (window_width < 768) {
        $("#sidebar").trigger("sticky_kit:detach");
    } else {
        make_sticky();
    }

    $( window ).resize(function() {

        window_width = $( window ).width();

        if (window_width < 768) {
            $("#sidebar").trigger("sticky_kit:detach");
        } else {
            make_sticky();
        }

    });

    function make_sticky() {
        $("#sidebar").stick_in_parent({
            parent: '.aside_cont'
        });
    }

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

  // Header block
  var $window = $(window),
      $card = $('.must_see_wrap'),
      $whenNot = $('.must_see_wrap .slick-list'),
      toggleSlick;

    toggleSlick = function () {
        if ($window.width() <= 480) {
            $card.not('.slick-initialized').slick();
        } else {
        	if (!$card.hasClass('.slick-initialized')) {
        		$card.not('.slick-initialized').slick();
        		$card.slick('unslick');	
        	}
        }
    }
    toggleSlick2 = function () {
        if ($window.width() <= 480) {
            $card.slick();
        }
    }
    $window.resize(toggleSlick);
    toggleSlick2();

});