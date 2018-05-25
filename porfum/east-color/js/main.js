`use strict`;

$(document).ready(function() {

	$('.index_slider').slick({
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		appendDots: $('.index_dots_container'),
	    prevArrow: $('.index_slider_left'),
	    nextArrow:$('.index_slider_right')
	});

	$('section.using_wrap .using_carousel').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
		dots: false,
	    prevArrow: $('.using_carousel_arrows .using_carousel_prev'),
	    nextArrow:$('.using_carousel_arrows .using_carousel_next'),
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

	$('#btnLoadCatalog').click(function(event) {
		$(this).addClass('load').delay(1000).queue(function(){
		    $(this).remove().dequeue();
		});
		$(this).closest('section.catalog-wrapper').addClass('load');
	});

	var $html = $('html');
  
	$html.on('click', '.header_funtion .btn-square', function(e) {
	    e.preventDefault();
	    var call = $(this).attr('data-call');

	    if (call == 'search') {
	      $('.header_wrap').removeClass('request_call');
	    } else if (call == 'request_call') {
	    	$('.header_wrap').removeClass('search');
	    }
	    $(this).closest('.header_wrap').toggleClass(call);
	});
	  
	$html.on('click', function(e) {
	    var $target = $(e.target);
	    if (!$target.parents().is('.search, .request_call')) {
	      $('.header_wrap').removeClass('search');
	      $('.header_wrap').removeClass('request_call');
	    }
	});

	// Menu 
	$(document).on('click touch', '#menu-btn', function(event) {
		event.preventDefault();
  		$(this).closest('header').find('.header_menu_wrap').addClass('open_menu');
  		$('header').append('<div class="menu_close"></div>');
	});

	$(document).on('click touch', '.menu_close', function(event) {
		event.preventDefault();
  		$(this).closest('header').find('.header_menu_wrap').removeClass('open_menu');
  		$(this).remove();
	});

	// Nano Scroller
	$(".scroll").nanoScroller({paneClass:"scroll-pane",sliderClass:"scroll-slider",contentClass:"scroll-content"})
});