`use strict`;

$(document).ready(function() {

	$(document).on('click touch', '.header_search_btn', function(e){
		e.preventDefault();
		$(this).closest('.header_search').toggleClass('open');
	});

	$(document).on('click touch', function(e) {
	    var $target = $(e.target);
	    if (!$target.parents().is('.header_search')) {
	      $('.header_search').removeClass('open');
	    }
	});

	$(document).on('click touch', 'li.has-submenu i.dropdown_submenu', function(e) {
	    $(this).toggleClass('opened');
		$(this).closest('.has-submenu').find('.submenu').toggle();
	});

	// Menu 
	$(document).on('click touch', '#menu_btn', function(event) {
		event.preventDefault();
  		$(this).closest('header').find('.header_menu_wrap').addClass('open_menu');
  		$('header').append('<div class="menu_close"></div>');
	});

	$(document).on('click touch', '.menu_close', function(event) {
		event.preventDefault();
  		$(this).closest('header').find('.header_menu_wrap').removeClass('open_menu');
  		$(this).remove();
	});

	$('.direction_item_wrap').slick({
		slidesToShow: 6,
		slidesToScroll: 6,
		arrows: false,
		dots: true,
	    responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 5,
		        slidesToScroll: 5
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 4
		      }
		    },
		    {
		      breakpoint: 590,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3
		      }
		    },
		    {
		      breakpoint: 390,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    }
		]
	});

	$('.popular_item_wrap').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		dots: true,
		appendDots: $('.popular_dots_container'),
	    responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 426,
		      settings: {
		      	appendDots: $('.popular_item_wrap'),
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		]
	});

	

	
});