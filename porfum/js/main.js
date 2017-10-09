$(document).ready(function() {
	// Cart Change
	var id = animateDivs("product_id1");
	function animateDivs(id) {
    var divId = (id == "product_id1") ? "product_id2" :
                (id == "product_id2") ? "product_id3" :
                (id == "product_id3") ? "product_id4" :
                "product_id1";
    $("#" + id).delay(5000)
        .toggle("slide", {direction: "right"}, 650).delay(5000)
        .toggle("slide", {direction: "right"}, 650, function() {
            animateDivs(divId)
         });
	}
	$('.feedback_slider_wrapper').slick({
		slidesToShow: 2,
	    slidesToScroll: 2,
	    autoplay: true,
	    responsive: [
		  {
		    breakpoint: 991,
		    settings: {
		      slidesToShow: 1,
		      slidesToScroll: 1
		    }
		  }
		]
	});

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
			if ($(".feedback_search_wrapper input[name='phone']").val() === "8 (___) ___-__-__") {
				$(this).next("label").removeClass("value_label");
			}
		} else {
			$(this).next("label").removeClass("value_label");
		}
	});

	// Check inform
	$(".feedback_search_wrapper input[type='submit']").click(function(e) {
		if ($(".feedback_search_wrapper").find("#name").val().length === 0) {
			e.preventDefault();
			$(".feedback_search_wrapper").find("#name").addClass("error");
		}
		if ($(".feedback_search_wrapper").find("#phone").val().length === 0) {
			e.preventDefault();
			$(".feedback_search_wrapper").find("#phone").addClass("error");
		}
	});

	// Countdown
	$(".count-down").countdown("2017/10/06 09:34:56", function(event) {
		$('.timer .month').text(
			event.strftime('%-m')
		);
		$('.timer .days').text(
			event.strftime('%-D')
		);
		$('.timer .hours').text(
			event.strftime('%-H')
		);
		$('.timer .minutes').text(
			event.strftime('%-M')
		);
		$('.timer .seconds').text(
			event.strftime('%-S')
		);
	});

	// Mask for input
	$('input[name="phone"]').mask("8 (999) 999-99-99");

	// Smooth scrolling
	$('a[href^="#"]').on('click', function(e){
        e.preventDefault();
        var t = 1000;
        var d = $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top + 4 }, t);
    });

    // JCF
	jcf.replaceAll();

});
