$(window).on("load",function(){var e=$("#startup");e.find(".spinner").fadeOut(),e.delay(350).fadeOut("slow")}),$(document).ready(function(){function e(){$(this).scrollTop()>250?$(".scrollToTop").fadeIn("slow"):$(".scrollToTop").fadeOut("slow")}function r(){var e=$("section.advance_wrapper");if($(window).width()<=767)r=6;else var r=3;var a="50% "+-$(window).scrollTop()/r+"px";$(e).css({backgroundPosition:a})}if((new WOW).init(),$("html").easeScroll(),autosize(document.querySelectorAll("textarea")),$(".scrollToTop").click(function(){return $("html, body").animate({scrollTop:0},900),!1}),$(".custom_navbar_toggle").on("click",function(){$(".mobile_menu_close").addClass("mobile_menu_close_active"),$(".header_sections").addClass("header_sections_open")}),$(".mobile_menu_close").click(function(){$(this).removeClass("mobile_menu_close_active"),$(".header_sections").removeClass("header_sections_open")}),$("section.advance_wrapper").length&&$(window).scroll(function(){r()}),$(window).on("load",function(){$("#carouselTicker").carouselTicker({delay:18})}),$(window).scroll(function(){e()}),$("body .advance_wrapper").length){var a=0,i=$(".advance_wrapper").offset().top-window.innerHeight;$(window).scroll(function(){0==a&&$(window).scrollTop()>i&&($(".advance_item .count").each(function(e){var r=$(this),a=r.attr("data-count");$({countNum:r.text()}).delay(300).animate({countNum:a},{duration:4300,easing:"swing",step:function(){r.text(Math.floor(this.countNum))},complete:function(){r.text(this.countNum)}})}),a=1)})}$(".slider.owl-carousel").owlCarousel({singleItem:!0,items:1,loop:!0,autoplay:!0,smartSpeed:400,nav:!0,navText:["<i class='slider_arrows left_arrow'></i>","<i class='slider_arrows right_arrow''></i>"]}),$(".feedback_carousel.owl-carousel").owlCarousel({singleItem:!0,items:1,loop:!0,autoplay:!0,smartSpeed:800,nav:!0,navText:["<i class='slider_arrows left_arrow'></i>","<i class='slider_arrows right_arrow''></i>"]}),$(".news_item_wrapper>.owl-carousel").owlCarousel({singleItem:!0,items:3,slideBy:3,margin:60,loop:!0,smartSpeed:400,nav:!0,navText:["<i class='slider_arrows left_arrow'></i>","<i class='slider_arrows right_arrow''></i>"],responsive:{1199:{margin:60},992:{margin:30,items:3,slideBy:3},767:{margin:30,items:2,slideBy:2},0:{items:1,slideBy:1,margin:30,autoplay:!0}}}),$(".service_carousel_wrapper .left ul li a").each(function(){var e=$(this),r=e.find("span"),a=e.closest("ul").width()-e.width();r.css({left:e.width()+34+15,width:a-34-5})});var s=$("section.services_wrapper .service_carousel_wrapper .left ul li").length,l=$(".services_wrapper .carousel");l.owlCarousel({nav:!0,slideSpeed:600,autoplay:!0,loop:!0,autoplayTimeout:5e3,paginationSpeed:400,pagination:!0,navText:["<i class='slider_arrows left_arrow'></i>","<i class='slider_arrows right_arrow''></i>"],items:1,onInitialize:function(){$(".services_wrapper .left ul li a").click(function(e){e.preventDefault(),$(".services_wrapper .left ul li a").addClass("disable"),$(this).removeClass("disable");var r=$(this).parent().index();l.trigger("to.owl.carousel",r)})},onChanged:function(e){var r=e.item.index-e.relatedTarget._clones.length/2+1;0===r&&(r=s),$(".services_wrapper .left ul li a").addClass("disable"),$(".services_wrapper .left ul li:nth-child("+r+") a").removeClass("disable")}});var t=$("#reg-ru");$("#reg-en"),$("form");t.length&&(jQuery.validator.addMethod("ru_number",function(e,r){return/^\+?7\s?(\(\d{2}\)|\d{2})\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/.test(e)},"Пожалуйста укажите номер телефона в международном формате"),t.validate({ignore:[],callback:t.find(".custom_btn_link").click(function(e){var r=".select-styled",a=$(".reg_content");firstStyled=a.find(".col-sm-6").first(),lastStyled=a.find(".col-sm-6").last(),firstStyled.find(r).hasClass("dont-choose")?($(firstStyled).find("label.city.error").remove(),e.preventDefault(),$("html, body").animate({scrollTop:$(r).offset().top-100},900),firstStyled.find(r).parent().append('<label class="error city">Выберите страну</label>'),firstStyled.find(r).css("borderColor","red")):firstStyled.find(r).css("borderColor","#e1e8ee"),lastStyled.find(r).hasClass("dont-choose")?($(lastStyled).find("label.city.error").remove(),e.preventDefault(),$("html, body").animate({scrollTop:$(r).offset().top-100},900),lastStyled.find(r).parent().append('<label class="error city">Выберите город</label>'),lastStyled.find(r).css("borderColor","red")):lastStyled.find(r).css("borderColor","#e1e8ee")}),rules:{email:{required:!0,email:!0},first_name:"required",second_name:"required",last_name:"required",password:"required",password_again:{equalTo:"#password"},phone:{required:!0,minlength:8,ru_number:!0}},messages:{email:"Пожалуйста, укажите действительный Е-mail адрес",first_name:"Пожалуйста, укажите Ваше имя",second_name:"Пожалуйста, укажите Вашу фамилию",last_name:"Пожалуйста, укажите Ваше отчество",appeal_type:"Пожалуйста, укажите тип обращения",password:"Пожалуйста, укажите ваш пароль",password_again:"Ваш пароль не совпадает",phone:{required:"Пожалуйста, напишите Контактный номер",minlength:"(+7) 999-99-99 Поля Телефона должно быть виде примера",ru_number:"Пожалуйста укажите номер телефона в международном формате"}}}));var o=$("#deliveryRu");$("#deliveryEn"),$("form");o.length&&(jQuery.validator.addMethod("ru_number",function(e,r){return/^\+?7\s?(\(\d{2}\)|\d{2})\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/.test(e)},"Пожалуйста укажите номер телефона в международном формате"),o.validate({ignore:[],rules:{email:{required:!0,email:!0},addres:"required",characteristic:{required:!0,minlength:10},description:"required",destination:"required",company_name:"required",person:"required",phone:{required:!0,minlength:9,ru_number:!0}},messages:{email:"Пожалуйста, укажите действительный е-mail адрес",addres:"Пожалуйста, укажите адрес доставки",characteristic:{required:"Пожалуйста, укажите характеристику груза",minlength:"Пожалуйста, напишите больше информации"},description:"Пожалуйста, укажите описание груза",destination:"Пожалуйста, укажите назначение груза",company_name:"Пожалуйста, укажите название вашей компании",person:"Пожалуйста, укажите контактное лицо",phone:{required:"Пожалуйста, напишите Контактный номер",minlength:"+7 999-99-99 Поля Телефона должно быть виде примера",ru_number:"Пожалуйста укажите номер телефона в международном формате"}}}));var n=$(".catalog_category_list_wrapper .list_header"),d=$(".catalog_category_list_wrapper .list_header .show_catalog");n.length&&d.click(function(e){$(".catalog_category_list_wrapper .catalog_category_list").slideToggle("slow"),n.toggleClass("active")})});