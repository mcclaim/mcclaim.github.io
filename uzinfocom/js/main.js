`use strict`;
$(document).ready(function() {
	$('.slider_container').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		loop: true,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: true,
		cssEase: 'linear',
		dots: true
	});

	$("input,textarea").focus(function() {
        $(this).parents(".enter_group").addClass("focus");
    });
    $("input,textarea").blur(function() {
        $(this).parents(".enter_group").removeClass("focus");
        if ($(this).val().length !== 0) {
            $(this).parents(".enter_group").addClass("focused");
        } else {
            $(this).parents(".enter_group").removeClass("focused");
        }
    });
});