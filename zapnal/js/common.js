function buttonUp(){var o=$(".date_searchbox_input").val();0!==(o=$.trim(o).length)?$(".date_searchbox_icon").css("display","none"):($(".date_searchbox_input").val(""),$(".date_searchbox_icon").css("display","block"))}function helpfulInform(o){$(o).toggleClass("active"),$(".helpful_inform_container").slideToggle()}$(window).on("load",function(){var o=$("#startup");o.find(".spinner").fadeOut(),o.delay(350).fadeOut("slow")}),$(document).ready(function(){$("select").niceSelect(),$("body input[type=number]").length&&jcf.replaceAll(),$("html").easeScroll(),autosize(document.querySelectorAll("textarea")),$(window).scroll(function(){$(this).scrollTop()>250?$(".scrollToTop").fadeIn("slow"):$(".scrollToTop").fadeOut("slow")}),$(".scrollToTop").click(function(){return $("html, body").animate({scrollTop:0},900),!1});var o=$(".index_page .choose_category ul");o.length&&$(document).on("click touch",".index_page .choose_category .current_catalog",function(){o.slideToggle()});var e=$(".enter_site_form form .input_password");e.length&&$(document).on("click touch",".enter_site_form form .input_password a.show_password",function(){e.find(".form-control").attr("type",function(o,e){return"password"==e?"text":"password"}),$(this).toggleClass("showed")});if($("section.promo_video_block_wrapper").length&&($(document).on("click touch","section.promo_video_block_wrapper .video_1 i.zmdi",function(){$(this).parent().html('<iframe src="https://www.youtube.com/embed/nRTJd91G04Q?modestbranding=1;rel=0;autohide=3;controls=1;autoplay=1;showinfo=3;iv_load_policy=3;" frameborder="0" allowfullscreen></iframe>')}),$(document).on("click touch","section.promo_video_block_wrapper .video_2 i.zmdi",function(){$(this).parent().html('<iframe src="https://www.youtube.com/embed/4Dd5XqXFv1k?modestbranding=1;rel=0;autohide=3;controls=1;autoplay=1;showinfo=3;iv_load_policy=3;" frameborder="0" allowfullscreen></iframe>')})),$(".dropdown").on("show.bs.dropdown",function(o){$(this).find(".dropdown-menu").first().stop(!0,!0).slideDown()}),$(".dropdown").on("hide.bs.dropdown",function(o){$(this).find(".dropdown-menu").first().stop(!0,!0).slideUp()}),$(".date_searchbox").length){var t=$(".date_searchbox_icon"),n=$(".date_searchbox_input"),c=$(".date_searchbox"),r=!1;t.click(function(){0==r?(c.addClass("date_searchbox_open"),n.focus(),r=!0):n.val().length>=1||(c.removeClass("date_searchbox_open"),n.focusout(),r=!1)}),t.mouseup(function(){return!1}),c.mouseup(function(){return!1}),$(document).mouseup(function(){1==r&&(n.val().length>=1||($(".date_searchbox_icon").css("display","block"),t.click()))})}});