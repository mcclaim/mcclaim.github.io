$(document).ready(function() {
    var w = screen.width,
        h = screen.height;
    //E-mail Ajax Send
    $("form").each(function() {
        var it = $(this);
        it.validate({
            rules: {
                phone: {
                    required: true
                }
            },
            messages: {},
            errorPlacement: function(error, element) {},
            submitHandler: function(form) {
                var thisForm = $(form);
                $.ajax({
                    type: "POST",
                    url: thisForm.attr("action"),
                    data: thisForm.serialize()
                }).done(function() {
                    $.fancybox.close();
                    $.fancybox({
                        href: '#myThanks',
                        wrapCSS: 'owrap',
                        openEffect: "elastic",
                        openMethod: "zoomIn",
                        closeEffect: "elastic",
                        closeMethod: "zoomOut",
                    });
                    setTimeout(function() {
                        $.fancybox.close();
                    }, 3000);
                    it.trigger("reset");
                });
                return false;
            },
            success: function() {},
            highlight: function(element, errorClass) {
                $(element).addClass('error');
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass('error');
            }
        })
    });

    //  scroll with offset
    $(".nav_list").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href');
        // screen width
        if (w < 768) {
            $(id).attr('data-top', 90);
        }
        var topOffset = $(id).attr("data-top");
        var top = $(id).offset().top,
            finalTop = top - topOffset;
        // console.log(top);
        $('body,html').animate({ scrollTop: finalTop }, 700);

    });


    if (w < 768) {
        $(".nav_list li a").click(function() {
            $(".hidden_trigger").removeClass('open_menu');
            $(".nav_list").slideUp();
        });
    }

    $(window).on('resize', function() {
        if (w < 768) {
            $(".nav_list li a").click(function() {
                $(".hidden_trigger").removeClass('open_menu');
                $(".nav_list").slideUp();
            });
        }
    });

    $(".scroll_btn").click(function() {
        event.preventDefault();
        var id = $(this).attr('href');
        // screen width
        // if (w < 768) {
        //     $(id).attr('data-top', 90);
        // }
        var topOffset = $(id).attr("data-top");
        var top = $(id).offset().top,
            finalTop = top - topOffset;
        // console.log(top);
        $('body,html').animate({ scrollTop: finalTop }, 700);
    });


    // top menu
    // if (w > 768) {
    //     $(window).scroll(function() {
    //         var top = $(document).scrollTop();
    //         if (top < 700) $(".nav_list").removeClass("more");
    //         else $(".nav_list").addClass("more").fadeIn("slow");
    //     });
    // }

    // menu-btn 
    $(".hidden_trigger").click(function() {
        $(".nav_list").slideToggle();
        $(this).toggleClass('open_menu');
    });

    //masked
    $('input[type=tel]').mask("+9(999) 999-99-99");

    //$(window).on('resize', function() {});

    $(".fancybox").fancybox({
        // margin: 0
        // scrolling: 'yes',
        // fixed: false,
        // autoCenter: true,
        // centerOnScroll: true,
        // helpers: {
        //     overlay: {
        //         showEarly: false
        //     }
        // }
        beforeShow: function() {
            initCarousels();
        },
        afterClose: function() {
            $(".hids > input[type=hidden]").remove();
        }
    });


    // isotope
    var $container = $('.grid');
    $container.isotope();
    $('.iso_bt').click(function() {
        $('.iso_bt').removeClass('active');
        $(this).addClass('active');
        var thisText = $(this).data('text')
        $(".filter_text").text(thisText);
        var selector = $(this).attr('data-filter');
        $container.isotope({ filter: selector });
        return false;
    });



    // accordion
    $(".panel_link").click(function() {
        var parent_panel = $(this).parents('.panel-default').find('.panel-collapse');
        $(this).closest('.panel-default').siblings().removeClass('active_panel');
        if (parent_panel.hasClass('in')) {
            $(this).closest('.panel-default').removeClass('active_panel');
        } else {
            $(this).closest('.panel-default').addClass('active_panel');
        }
    });



    // scroll
    $(".scroll-pane").mCustomScrollbar({
        theme: "my-theme"
    });




    // $(".grid-item").hover(function() {
    //     $(this).animate({
    //         top: '-=10'
    //     }, 300);
    // }, function() {
    //     $(this).animate({
    //         top: '+=10'
    //     }, 300);
    // });


    $(".item_btn").click(function() {
        var thisName = $(this).closest('.grid-item').find(".it_text h4").text();
        var thisSize = $(this).closest('.grid-item').find(".it_sizes").text();
        $(".hids").append(
            $('<input>', {
                type: 'hidden',
                value: thisName,
                name: "Название"
            })
        ).append(
            $('<input>', {
                type: 'hidden',
                value: thisSize,
                name: "Размер"
            })
        );
    });



    var landCity = $(".container-fluid").data('location');

    $("form").each(function(index, el) {
        $(this).prepend(
            $('<input>', {
                type: 'hidden',
                value: landCity,
                name: "Город сайта"
            })
        )
    });

    // Slider for Product information
    var configs = {
        mainCarousel: {
            items : 1,
            slideSpeed : 2000,
            nav: true,
            autoplay: false,
            dots: false,
            loop: true,
            responsiveRefreshRate : 200,
            responsiveClass:true,
            navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
        },
        thumbnailsCarousel: {
            items : 4,
            dots: false,
            nav: true,
            margin:10,
            smartSpeed: 200,
            slideSpeed : 500,
            slideBy: 4, 
            responsiveRefreshRate : 100,
            responsiveClass:true,
            responsive : {
                0 : {
                    items: 1
                },
                321 : {
                    items : 2
                },
                550 : {
                    items : 3
                },
                661 : {
                    items : 4
                }
            },
            navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
        }
    }

    // Carousels in modal window
    function initCarousels() {
        var $main_carousel = $('.sync1', '.fancybox-overlay');
        var $thumbnails = $('.sync2', '.fancybox-overlay');
        var $product_details = $('.product_details', '.fancybox-overlay');

        // main init
        $main_carousel.owlCarousel(configs.mainCarousel).on('changed.owl.carousel', mainSyncPosition);

        // thumbnails init
        $thumbnails.on('initialized.owl.carousel', function () {
            $(this).find(".owl-item").eq(0).addClass("current");
        }).owlCarousel(configs.thumbnailsCarousel).on('changed.owl.carousel', thumbnailsSyncPosition);


        function mainSyncPosition(e) {
            var count = e.item.count-1;
            var current = Math.round(e.item.index - (e.item.count/2) - .5);
            var target = $(e.target).closest($product_details).find($thumbnails);
    
            if (!target) {
                return;
            }
            if (current < 0) {
                current = count;
            }
            if (current > count) {
                current = 0;
            }
            
            target
                .find(".owl-item")
                .removeClass("current")
                .eq(current)
                .addClass("current");
                
            var $active = target.find('.owl-item.active');
            var onscreen = $active.length - 1;
            var start = $active.first().index();
            var end = $active.last().index();
    
            if (current > end) {
                target.data('owl.carousel').to(current, 100, true);
            }
            
            if (current < start) {
                target.data('owl.carousel').to(current - onscreen, 100, true);
            }
        }
    
        function thumbnailsSyncPosition(e) {
            var index = e.item.index;
            var target = $(e.target).closest($product_details).find($main_carousel);
    
            target.data('owl.carousel').to(index, 100, true);
        }
    
        $thumbnails.on("click", ".owl-item", function(e){
            e.preventDefault();
            var index = $(this).index();
            var target = $(this).closest($product_details).find($main_carousel);
    
            if (target) {
                target.data('owl.carousel').to(index, 300, true);
            }
        });
                
        $(document).on( "click", ".product_color ul li a", function(e) {
            e.preventDefault();
            var href = $(this).attr("href");
            $(this).closest( ".product_details").find(".sync1 .owl-item.active img").attr("src", href);
        });
    }
});

