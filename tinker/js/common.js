function TAShow(){$("#keysearch").remove(),$(".input_group").prepend('<textarea name="keysearch" rows="5"  placeholder="Номера деталей. По одному номеру в строку. Максимум 10 номеров." id="TAKeysearch" required="required"></textarea>'),$("#TAShow").removeAttr("onclick").attr("onclick","INShow();return false;").find("span:first-child").css("display","none"),$(".search_block").addClass("search_mrshow")}function INShow(){$("#TAKeysearch").remove(),$(".input_group").prepend('<input type="text" id="keysearch" placeholder="Номер детали" required="required" />'),$("#TAShow").removeAttr("onclick").attr("onclick","TAShow();return false;").find("span:first-child").css("display","block"),$(".search_block").removeClass("search_mrshow")}$(window).on("load",function(){var e=$("#startup");e.find(".spinner").fadeOut(),e.delay(350).fadeOut("slow")}),$(document).ready(function(){function e(){$(this).scrollTop()>250?$(".scrollToTop").fadeIn("slow"):$(".scrollToTop").fadeOut("slow")}function r(){var e=$("section.advance_wrapper");if($(window).width()<=767)r=6;else var r=3;var s="50% "+-$(window).scrollTop()/r+"px";$(e).css({backgroundPosition:s})}if($("body input[type=number]").length&&jcf.replaceAll(),(new WOW).init(),autosize(document.querySelectorAll("textarea")),$(".scrollToTop").click(function(){return $("html, body").animate({scrollTop:0},900),!1}),$(".custom_navbar_toggle").on("click",function(){$(".mobile_menu_close").addClass("mobile_menu_close_active"),$(".header_sections").addClass("header_sections_open")}),$(".mobile_menu_close").click(function(){$(this).removeClass("mobile_menu_close_active"),$(".header_sections").removeClass("header_sections_open")}),$("section.advance_wrapper").length&&$(window).scroll(function(){r()}),$(window).on("load",function(){$("#carouselTicker").carouselTicker({delay:18})}),$(window).scroll(function(){e()}),$("body .advance_wrapper").length){var s=0,a=$(".advance_wrapper").offset().top-window.innerHeight;$(window).scroll(function(){0==s&&$(window).scrollTop()>a&&($(".advance_item .count").each(function(e){var r=$(this),s=r.attr("data-count");$({countNum:r.text()}).delay(100).animate({countNum:s},{duration:4300,easing:"swing",step:function(){r.text(Math.floor(this.countNum))},complete:function(){r.text(this.countNum)}})}),s=1)})}if($(".slider.owl-carousel").owlCarousel({singleItem:!0,items:1,loop:!0,autoplay:!0,smartSpeed:400,nav:!0,navText:["<i class='slider_arrows left_arrow'></i>","<i class='slider_arrows right_arrow''></i>"]}),$(".feedback_carousel.owl-carousel").owlCarousel({singleItem:!0,items:1,loop:!0,autoplay:!0,smartSpeed:800,nav:!0,navText:["<i class='slider_arrows left_arrow'></i>","<i class='slider_arrows right_arrow''></i>"]}),$("body section.usa_products_feedback").length){var o=window.innerWidth||document.body.clientWidth,i=$("section.usa_products_feedback .carousel");o<481?i.slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:6e3,speed:1e3}):i.slick({slidesPerRow:2,rows:2,autoplay:!1,autoplaySpeed:6e3,speed:1e3,responsive:[{breakpoint:481,settings:{slidesPerRow:1,rows:2,slidesToShow:1,slidesToScroll:1}},{breakpoint:991,settings:{slidesPerRow:1,rows:2,slidesToShow:1,slidesToScroll:1}}]})}$(".news_item_wrapper>.owl-carousel").owlCarousel({singleItem:!0,items:3,slideBy:3,margin:60,loop:!0,smartSpeed:400,nav:!0,navText:["<i class='slider_arrows left_arrow'></i>","<i class='slider_arrows right_arrow''></i>"],responsive:{1199:{margin:60},992:{margin:30,items:3,slideBy:3},767:{margin:30,items:2,slideBy:2},0:{items:1,slideBy:1,margin:30,autoplay:!0}}}),$(".service_carousel_wrapper .left ul li a").each(function(){var e=$(this),r=e.find("span"),s=e.closest("ul").width()-e.width();r.css({left:e.width()+34+15,width:s-34-5})});var t=$("section.services_wrapper .service_carousel_wrapper .left ul li").length,l=$(".services_wrapper .carousel");l.owlCarousel({nav:!0,slideSpeed:600,autoplay:!0,loop:!0,autoplayTimeout:5e3,paginationSpeed:400,pagination:!0,navText:["<i class='slider_arrows left_arrow'></i>","<i class='slider_arrows right_arrow''></i>"],items:1,onInitialize:function(){$(".services_wrapper .left ul li a").click(function(e){e.preventDefault(),$(".services_wrapper .left ul li a").addClass("disable"),$(this).removeClass("disable");var r=$(this).parent().index();l.trigger("to.owl.carousel",r)})},onChanged:function(e){var r=e.item.index-e.relatedTarget._clones.length/2+1;0===r&&(r=t),$(".services_wrapper .left ul li a").addClass("disable"),$(".services_wrapper .left ul li:nth-child("+r+") a").removeClass("disable")}});var n=$("#reg-ru");$("#reg-en"),$("form");n.length&&(jQuery.validator.addMethod("ru_number",function(e,r){return/^\+?7|\+?8\s?(\(\d{3}\)|\d{3})\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/.test(e)},"Пожалуйста укажите номер телефона в международном формате"),n.validate({ignore:[],callback:n.find(".custom_btn_link").click(function(e){var r=".select-styled",s=$(".reg_content");firstStyled=s.find(".col-sm-6").first(),lastStyled=s.find(".col-sm-6").last(),firstStyled.find(r).hasClass("dont-choose")?($(firstStyled).find("label.city.error").remove(),e.preventDefault(),$("html, body").animate({scrollTop:$(r).offset().top-100},900),firstStyled.find(r).parent().append('<label class="error city">Выберите страну</label>'),firstStyled.find(r).css("borderColor","red")):firstStyled.find(r).css("borderColor","#e1e8ee"),lastStyled.find(r).hasClass("dont-choose")?($(lastStyled).find("label.city.error").remove(),e.preventDefault(),$("html, body").animate({scrollTop:$(r).offset().top-100},900),lastStyled.find(r).parent().append('<label class="error city">Выберите город</label>'),lastStyled.find(r).css("borderColor","red")):lastStyled.find(r).css("borderColor","#e1e8ee")}),rules:{email:{required:!0,email:!0},first_name:"required",second_name:"required",last_name:"required",password:"required",password_again:{equalTo:"#password"},phone:{required:!0,minlength:8,ru_number:!0}},messages:{email:"Пожалуйста, укажите действительный Е-mail адрес",first_name:"Пожалуйста, укажите Ваше имя",second_name:"Пожалуйста, укажите Вашу фамилию",last_name:"Пожалуйста, укажите Ваше отчество",appeal_type:"Пожалуйста, укажите тип обращения",password:"Пожалуйста, укажите ваш пароль",password_again:"Ваш пароль не совпадает",phone:{required:"Пожалуйста, напишите Контактный номер",minlength:"+7 (901) 101-01-01 или +8 (901) 101-01-01 Поля Телефона должно быть виде примера",ru_number:"Пожалуйста укажите номер телефона в международном формате"}}}));var d=$("#deliveryRu");$("#deliveryEn"),$("form");d.length&&(jQuery.validator.addMethod("ru_number",function(e,r){return/^\+?7|\+?8\s?(\(\d{3}\)|\d{3})\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/.test(e)},"Пожалуйста укажите номер телефона в международном формате"),d.validate({ignore:[],rules:{email:{required:!0,email:!0},addres:"required",characteristic:{required:!0,minlength:10},description:"required",destination:"required",company_name:"required",person:"required",phone:{required:!0,minlength:9,ru_number:!0}},messages:{email:"Пожалуйста, укажите действительный е-mail адрес",addres:"Пожалуйста, укажите адрес доставки",characteristic:{required:"Пожалуйста, укажите характеристику груза",minlength:"Пожалуйста, напишите больше информации"},description:"Пожалуйста, укажите описание груза",destination:"Пожалуйста, укажите назначение груза",company_name:"Пожалуйста, укажите название вашей компании",person:"Пожалуйста, укажите контактное лицо",phone:{required:"Пожалуйста, напишите Контактный номер",minlength:"+7 (901) 101-01-01 или +8 (901) 101-01-01 Поля Телефона должно быть виде примера",ru_number:"Пожалуйста укажите номер телефона в международном формате"}}}));var c=$(".catalog_category_list_wrapper .list_header"),u=$(".catalog_category_list_wrapper .list_header .show_catalog");c.length&&u.click(function(e){$(".catalog_category_list_wrapper .catalog_category_list").slideToggle("slow"),c.toggleClass("active")}),$(document).width()<767&&$(".alfexpo_block .owl-carousel").owlCarousel({margin:0,smartSpeed:400,thumbs:!0,thumbsPrerendered:!0,nav:!0,navText:["<i class='slider_arrows left_arrow'></i>","<i class='slider_arrows right_arrow''></i>"],responsive:{0:{items:1,slideBy:1,loop:!0}}}),$(".usa_products_access_slider .owl-carousel").owlCarousel({margin:55,smartSpeed:400,loop:!0,autoplay:!0,items:7,slideBy:1,nav:!0,navText:["<i class='slider_arrows left_arrow'></i>","<i class='slider_arrows right_arrow''></i>"],responsive:{1200:{nav:!0,items:7,slideBy:1},992:{nav:!0,items:5,slideBy:1},481:{margin:40,items:4,slideBy:4,nav:!1,center:!0},322:{margin:10,items:3,slideBy:3,nav:!1,center:!1,autoplay:!0},0:{margin:10,items:2,slideBy:2,nav:!1,center:!0}}}),$("section.usa_products_gallery .owl-carousel").owlCarousel({margin:0,smartSpeed:400,loop:!0,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,items:4,slideBy:1,nav:!0,navText:["<i class='slider_arrows left_arrow'></i>","<i class='slider_arrows right_arrow''></i>"],responsive:{1200:{nav:!0,items:4,slideBy:1},992:{nav:!0,items:3,slideBy:1},481:{items:2,slideBy:1,center:!0},0:{items:2,slideBy:1,nav:!1,center:!0}}}),$("body .responsive_table_wrapper .product_comment").length&&($(".writed_comment a").each(function(e,r){var s=$(r).text();$(".product_comment input.last_comment").eq(e).val(s)}),$(document).on("click",".writed_comment a",function(e){var r=$(this),s=r.text();r.parent().empty().html("<input type='text' name='editComment' class='form-control editComment' value='"+s+"'><i class='new_comment_press'></i>");var a=function(){var e=$(".writed_comment input.editComment"),r=e.val();e.parent().empty().html("<a href='javascript:void(0)'>"+r+" <i class='edit_icon'></i></a>").parent().parent().find("input.last_comment").val(r)};$(document).keypress(function(e){13==e.which&&a()}),$(document).on("click",".new_comment_press",a)})),$(".cart_page_wrapper #submit").click(function(){$("#cartField").submit()}),$("body .product_slider_main").length&&($(".product_slider_main").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".product_slider_nav"}),$(".product_slider_nav").slick({slidesToShow:4,slidesToScroll:1,asNavFor:".product_slider_main",dots:!1,arrows:!0,focusOnSelect:!0,autoplay:!0,responsive:[{breakpoint:481,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:321,settings:{slidesToShow:2,slidesToScroll:1}}]})),$("body .product_page_feedback_wrapper").length&&$(function(){$(".product_feedback_item_wrapper").slice(0,4).show(),$("#load_more").on("click touchstart",function(e){e.preventDefault(),$(".product_feedback_item_wrapper:hidden").slice(0,4).slideDown(800),$("html,body").animate({scrollTop:$(this).offset().top},1200)})})});