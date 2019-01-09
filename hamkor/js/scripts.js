$(".sr-button").click(function () {
    $(this).next().toggleClass('active');
});

    // Menu 
    $(document).on('click touch', '#menu-btn', function(event) {
        event.preventDefault();
        $(this).closest('.header-bottom').find('.main-menu').addClass('open');
        $('.menu-close').fadeIn('500');
    });

    $(document).on('click touch', '.menu-close', function(event) {
        event.preventDefault();
        $(this).closest('.header-bottom').find('.main-menu').removeClass('open');
        $(this).fadeOut('500');
    });

var swiper0 = new Swiper('.main-banner .swiper-container', {
    effect: 'fade',
    speed: 1000,
    pagination: {
        el: '.main-banner .swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // }
});

var swiper1 = new Swiper('.project-carousel', {
    simulateTouch: false,
    navigation: {
        nextEl: '.project-carousel .swiper-button-next',
        prevEl: '.project-carousel .swiper-button-prev',
    },
    breakpoints: {
        768: {
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            simulateTouch: true,
        },
        650: {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        }
    }
});

var swiper2 = new Swiper('.feedback-slider .swiper-container', {
    effect: 'cube',
    cubeEffect: {
        slideShadows: false,
        shadow: false,
    },
    speed: 600,
    navigation: {
        nextEl: '.feedback-slider .swiper-button-next',
        prevEl: '.feedback-slider .swiper-button-prev',
    }
});

var swiper3 = new Swiper('.certificate .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: '.certificate .swiper-button-next',
        prevEl: '.certificate .swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            simulateTouch: true
        },
        480: {
            slidesPerView: 2,
            simulateTouch: true
        }
    }
});

$(".close-pop").click(function () {
    $(".pop-up").removeClass('active-in');
});
$(".open-pop-up").click(function(){
    var imgP = $(this).find('.se-img').html();
    var titleP = $(this).find('.se-title').text();
    var textP = $(this).find('.se-text-content').html();

    $('.pop-up').addClass('active-in');
    $('.pop-img').html(imgP);
    $('.pop-title').text(titleP);
    $('.pop-content').html(textP);
});

