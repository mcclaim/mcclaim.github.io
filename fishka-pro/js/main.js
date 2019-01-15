// Initializing fullpage.js
$(window).on('load', function(){
    $("#preloader").delay(600).fadeOut("slow");
    $("#preloader-img").fadeOut();
    wellcome();
});

$(document).ready(function() {
	initialize();

	// Menu 
    $('#menu-btn').on('click touch', function(event) {
        event.preventDefault();
        var header = $(this).closest('header');
        if (header.hasClass('mobile-menu-open')) {
        	header.removeClass('mobile-menu-open');
        } else {
        	header.addClass('mobile-menu-open');
        }
    });

    $('#call-contact-block').on('click touch', function(event) {
    	event.preventDefault();
    	var block = $('.contact-block');
    	if (block.hasClass('open')) {
    		block.removeClass('open');
    		$('#contact-backdrop').fadeOut();
    	} else {
    		block.addClass('open');
    		$('#contact-backdrop').fadeIn();
    	}
    });

    $('#contact-backdrop, #close-contact-block').on('click touch', function(event) {
    	event.preventDefault();
		$('.contact-block').removeClass('open');
		$('#contact-backdrop').fadeOut();
    });
});

function initialize(){
	$('#main-container').fullpage({
		anchors: ['mainPage', 'aboutCompany', 'catalog'],
		menu: '#menu',
		licenseKey: null,
		dragAndMove: true,
		navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['01', '02', '03'],
		slidesNavigation: true,
		scrollingSpeed: 1000,
		responsiveWidth: 992,
		autoScrolling: true,
		fitToSection:false,
		afterLoad: function(anchorLink, index){
			if(index.index == 0){
				wellcome();
			} else if(index.index == 1) {
				whyUs();
			}

		}
	});
}

function wellcome() {
	$('.welcome-text').addClass('active');
}
function whyUs() {
	$('.why-us').addClass('active');
}
