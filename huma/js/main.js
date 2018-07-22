$(document).ready(function() {
	$(document).on('click', '.dropdown-menu', function (e) {
	    e.stopPropagation();
	});

	// Menu 
	$(document).on('click touch', '#menu_btn', function(event) {
		event.preventDefault();
  		$(this).closest('header').find('.header_menu').addClass('open_menu');
  		$('header').append('<div class="menu_close"></div>');
  		$('.menu_close').fadeIn('500');
	});

	$(document).on('click touch', '.menu_close', function(event) {
		event.preventDefault();
  		$(this).closest('header').find('.header_menu').removeClass('open_menu');
  		$(this).fadeOut('500');
  		$(this).remove();
	});

	// Main slider
	$('section.main_slider .main_slider_items').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: 1,
		autoplaySpeed: 3500,
		arrows: false,
		dots: true,
		useTransform: false
	});

	// Portfolio
	$('section.portfolio .potfolio_items').slick({
		rows: 2,
		slidesToShow: 5,
		infinite: true,
		swipeToSlide: true,
		autoplay: true,
		centerMode: true,
		autoplaySpeed: 3500,
		arrows: false,
		dots: false,
		useTransform: false,
		responsive: [
	    {
	      breakpoint: 1400,
	      settings: {
	        slidesToShow: 4
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 426,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	    ]
	});
});