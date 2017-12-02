$(document).ready(function() {
  // Mask for input
  jQuery(function($){
    var validTel = function(el) {

      if (!el) {
        el.addClass('error');
        return false;
      }

      var message = el.parent().find('.error-message');

      var clear = el.val().replace(/[-+()_\s]/g, '');
      if (clear[1] == '7' || clear[1] == '8' || clear.length != 11) {
        el.addClass('error');
        message.fadeIn(500).delay(5000).fadeOut(500);

        return false;
      }

      el.removeClass('error');
      message.hide();
      return true;
    }

    $('.tell').focus(function(){
      $(this).removeClass('error');
      $(this).parent().find('.error-message').hide();
    });

    $('.tell')
      .parent()
      .prepend('<div class="error-message">Неверный номер телефона</div>');
    $('.tell').parent().find('.error-message').hide();

    $('.tell').mask("+7 (999) 999-99-99", {
      autoclear : false,
      });

    $('form').submit(function(e){
          var tel = $(this).find('.tell');

          if (!validTel(tel)) {

            e.preventDefault();
            return false;
          }
      });
   });

    // You tube
      $(document).on("click touch",".scope_promo_video_wrapper a.play", function () {
          $('.scope_promo_video_wrapper a.play').remove();
          $('#video_wrap').html('<div class="inform_video_wrapper"><iframe src="https://www.youtube.com/embed/nRTJd91G04Q?modestbranding=1;rel=0;autohide=3;controls=1;autoplay=1;showinfo=3;iv_load_policy=3;" frameborder="0" allowfullscreen></iframe></div>');
      });

    // Slick Slider for English type
    $('.lesson_type_slider_wrapper').each(function (idx, item) {
        var carouselId = "carousel" + idx;
        this.id = carouselId;
        $(this).slick({
            slide: "#" + carouselId +" .lesson_type_slider_item",
            appendArrows: "#" + carouselId + " .slider_prev_next",
            prevArrow: '',
            autoplay: true,
            autoplaySpeed: 4000,
            nextArrow: '<a class="arrows"></a>'
        });
    });

    // Спуск до якоря
    $(document).on("click","a[data-nav='scroll']", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1100);
    });
});