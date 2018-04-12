$(document).ready(function() {
  // Main menu for mobile
  $(".main_mobile_button button").click(function() {
    $(".mobile_menu_close").addClass("mobile_menu_close_active");
    $(".main_menu").addClass("main_menu_open");
  });
  $(".mobile_menu_close_wrapper .mobile_menu_close").click(function() {
    $(".mobile_menu_close").removeClass("mobile_menu_close_active");
    $(".main_menu").removeClass("main_menu_open");
  });

  //  Ellipsis
  // $('.two-lines').ellipsis({ lines: 2 });

  // Lightbox
  lightbox.option({
      'fadeDuration': 100,
      'resizeDuration' : 300
    });

  // Datepicker
  $('.datetimepicker12').datetimepicker({
    inline: true,
    locale: 'ru',
    format: 'DD/MM/YYYY'
  });


  $('.multimedia_slider_item img').each(function() {
    $(this).wrap('<a href="' + $(this).attr('src') + '" data-lightbox="lightbox" class="lightbox-link"></a>');
  });

 // Main slider
  $('.slider__wrapper').slick({
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }
    ]
  });
  $('.faq_slider').slick({
    dots: true,
    prevArrow: false,
    nextArrow: false
  });

  // Photogallery
  $('.multimedia_slider__wrapper').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
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

  // Map Uzbekistan
  jQuery(document).ready(function() {
    jQuery('.vmap').vectorMap({ 
      map: 'uzbekistan',
      backgroundColor: 'transparent',
      // pins: pins,
      // pinMode: 'content',
      color: '#00528c',
      hoverColor: '#82c4d7',
      enableZoom: false,
      showTooltip: true,
      borderColor: '#fff',
      borderWidth: 1,
      borderOpacity: 1,
      onRegionClick: function (element, code, region) {
        if ($('.region_active').length) {
          $('.region_active').slideUp().removeClass('region_active');
        }
        $('.'+code).slideDown().addClass('region_active');
      }
    });
  });


});
