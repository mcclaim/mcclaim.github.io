$(document).ready(function() {
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
});
