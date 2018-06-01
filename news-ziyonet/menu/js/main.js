$(function () {
	$('[data-toggle="tooltip"]').tooltip();

	$(document).on('click touch', '.navbar_btn', function(event) {
		event.preventDefault();
  		$(this).closest('.navbar').find('ul').addClass('open_menu');
  		$('.navbar').append('<div class="menu_close"></div>');
	});

	$(document).on('click touch', '.menu_close', function(event) {
		event.preventDefault();
  		$(this).closest('.navbar').find('ul').removeClass('open_menu');
  		$(this).remove();
	});

})