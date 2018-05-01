$(function () {
	$('[data-toggle="tooltip"]').tooltip();

	$(document).on('click touch', '.navbar_btn', function(event) {
		event.preventDefault();
  		$(this).closest('.navbar').find('ul').addClass('open_menu');
  		$('body').append('<div class="menu_close"></div>');
	});

	$(document).on('click touch', '.menu_close', function(event) {
		event.preventDefault();
  		$(this).closest('body').find('.open_menu').removeClass('open_menu');
  		$('body').find('.menu_close').remove();
	});

})