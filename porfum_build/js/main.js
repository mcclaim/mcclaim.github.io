$(document).ready(function() {
	// $('.slider__wrapper').slick({
	//   responsive: [
	//   {
	//     breakpoint: 991,
	//     settings: {
	//       slidesToShow: 1,
	//       slidesToScroll: 1,
	//       dots: true
	//     }
	//   }
	//   ]
	// });
	// $('.faq_slider').slick({
	//   dots: true,
	//   prevArrow: false,
	//   nextArrow: false
	// });

	// Product Dropdown inform
	$(".product_check_inform a").click(function(e) {
			e.preventDefault();
			$(this).parent().parent().parent().toggleClass("product_active").find(".product_inform").slideToggle(400);
			$(this).parent().next().find(".close_product_inform").click(function(){
				$(this).parent().parent().parent().removeClass("product_active").find(".product_inform").slideUp(400);
			});
	});

	// Feedback Form input
	$(".feedback_search_wrapper input[type='text']").focusout(function(event) {
		if ($(this).val().length) {
			$(this).next("label").addClass("value_label");
		} else {
			$(this).next("label").removeClass("value_label");
		}
	});

});
