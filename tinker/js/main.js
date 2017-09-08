$(document).ready(function() {

	// Marquee
	$('.brands_wrapper').liMarquee({
		direction: 'right',	
		loop:-1,			
		scrolldelay: 0,		
		scrollamount:100,	
		circular: true,		
		drag: true			
	});

	// Wow js
	new WOW().init();

	animateCount();

	// Count animate
	var advan_item = $("section.advance_wrapper .advance_item");

	// if ( $(window).scrollTop() >= $('.facts').offset().top ) {	

	// 	$('.facts .list .item strong').each(function() {
	// 		var number  = $(this);
	// 		var currentNumber = number.text();
	// 		$({numberValue: currentNumber}).animate({numberValue: number.attr('data-count')}, {
	// 			duration: 4000,
	// 			easing: 'linear',
	// 			step: function() { 
	// 				number.text(Math.ceil(this.numberValue)); 
	// 			}
	// 		});
	// 	});
	// }

	$(window).scroll(function() {
		animateCount();
	});

	function animateCount() {
		if ( $(window).scrollTop() >= $('.advance_wrapper').offset() ) {	
			$('.count').each(function () {
			    $(this).prop('Counter',0).animate({
			        Counter: $(this).text()
			    }, {
			        duration: 4000,
			        easing: 'swing',
			        step: function (now) {
			            $(this).text(Math.ceil(now));
			        }
			    });
			});
		}
	}

	// Easy Scroll
	$("html").easeScroll();

	// TEXTAREA AUTO SIZE!
	autosize(document.querySelectorAll('textarea'));

	// Mobile menu
	$(".custom_navbar_toggle").on("click", function () {
		$(".mobile_menu_close").addClass("mobile_menu_close_active");
		$(".header_sections").addClass("header_sections_open");
	});
	$(".mobile_menu_close").click(function() {
	    $(this).removeClass("mobile_menu_close_active");
	    $(".header_sections").removeClass("header_sections_open");
	});

	// Slider full carousel
	$(".slider.owl-carousel").owlCarousel({
		singleItem: true,
		items: 1,
		loop: true,
		autoplay: true,
		smartSpeed: 400,
		nav: true,
		navText : ["<i class='slider_arrows left_arrow'></i>","<i class='slider_arrows right_arrow''></i>"]
	});

	// Feedback carousel
	$(".feedback_carousel.owl-carousel").owlCarousel({
		singleItem: true,
		items: 1,
		loop: true,
		autoplay: true,
		smartSpeed: 800,
		nav: true,
		navText : ["<i class='slider_arrows left_arrow'></i>","<i class='slider_arrows right_arrow''></i>"]
	});

	// Title carousel
	$(".title_carousel.owl-carousel").owlCarousel({
		singleItem: true,
		items: 1,
		loop: true,
		smartSpeed: 400,
		nav: true,
		navText : ["<i class='slider_arrows left_arrow'></i>","<i class='slider_arrows right_arrow''></i>"]
	});

	// Service Carousel
	$('.service_carousel_wrapper .left ul li a').each(function() {
		var current  = $(this);
		var span = current.find('span');
		var parent_width = current.closest('ul').width();
		var span_width = parent_width - current.width() ;
		span.css({
			'left' : current.width() + 34 + 15 ,
			'width' : span_width - 34 - 5
		});
	});

	var owl = $(".services_wrapper .carousel");
	owl.owlCarousel({
		nav : true,
		slideSpeed : 300,
		autoplay: true,
		loop: true,
		paginationSpeed : 400,   
		pagination:true,
		navText : ["<i class='slider_arrows left_arrow'></i>","<i class='slider_arrows right_arrow''></i>"],
		items: 1,
		onInitialize : function() {

			$('.services_wrapper .left ul li a').click(function(e) {
				e.preventDefault();
				$('.services_wrapper .left ul li a').addClass('disable');
				$(this).removeClass("disable");
				var index_li = $(this).parent().index();
				owl.trigger('to.owl.carousel', index_li);
			});

		},
		onChanged: function(event) {
			var currentIndex = event.item.index - (event.relatedTarget._clones.length / 2) + 1;

			if (currentIndex === 0) {
				currentIndex = 6;
			}

			$('.services_wrapper .left ul li a').addClass('disable');
			$('.services_wrapper .left ul li:nth-child(' + currentIndex + ') a').removeClass('disable');
		}
	});

	// Custom Select
	$('.tab-content select, select').each(function(){
	    var $this = $(this), numberOfOptions = $(this).children('option').length;
	  
	    $this.addClass('select-hidden'); 
	    $this.wrap('<div class="select"></div>');
	    $this.after('<div class="select-styled"><span>1</span></div>');

	    var $styledSelect = $this.next('div.select-styled');
	    $styledSelect.text($this.children('option').eq(0).text());
	  
	    var $list = $('<ul />', {
	        'class': 'select-options'
	    }).insertAfter($styledSelect);
	  
	    for (var i = 0; i < numberOfOptions; i++) {
	        $('<li />', {
	            text: $this.children('option').eq(i).text(),
	            rel: $this.children('option').eq(i).val()
	        }).appendTo($list);
	    }
	  
	    var $listItems = $list.children('li');
	  
	    $styledSelect.click(function(e) {
	        e.stopPropagation();
	        $('div.select-styled.active').not(this).each(function(){
	            $(this).removeClass('active').next('ul.select-options').hide();
	        });
	        $(this).toggleClass('active').next('ul.select-options').toggle();
	    });
	  
	    $listItems.click(function(e) {
	        e.stopPropagation();
	        $styledSelect.text($(this).text()).removeClass('active');
	        $this.val($(this).attr('rel'));
	        $list.hide();
	        //console.log($this.val());
	    });
	  
	    $(document).click(function() {
	        $styledSelect.removeClass('active');
	        $list.hide();
	    });
	});

	// Active item focus
	// var scope = $("section.scope_wrapper .scope_item");
	// scope.mouseover(function(event) {
	// 	scope.addClass("active_item");
	// 	$(this).removeClass("active_item");
	// });
	// scope.mouseleave(function(event) {
	// 	scope.removeClass("active_item");
	// });

});