// Initializing fullpage.js

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
	new fullpage('#main-container', {
		anchors: ['mainPage', 'aboutCompany', 'catalog'],
		menu: '#menu',
		licenseKey: null,
		dragAndMove: true,
		navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['01', '02', '03'],
		slidesNavigation: true,
		scrollingSpeed: 1000,
		responsiveWidth: 768,
		autoScrolling: true,
		fitToSection:false
	});
}
