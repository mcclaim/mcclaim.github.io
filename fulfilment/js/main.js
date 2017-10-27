$(document).ready(function() {

  // Main menu for mobile
  $(".main_mobile_button button").click(function() {
  	$(".mobile_menu_close").addClass("mobile_menu_close_active");
    $(".main_menu").addClass("main_menu_open");
  });
  $(".mobile_menu_close_wrapper .mobile_menu_close").click(function() {
    $(".mobile_menu_close").removeClass("mobile_menu_close_active");
    $(".main_menu").removeClass("main_menu_open");
  });

  // Input if have another
  $('input[type=text]').each(function() {
    var $this = $(this)
    $this.val() ? $this.addClass('active-label') :  $this.removeClass('active-label');
  });

    $('input[type=text]').change(function() {
    var $this = $(this);
    $this.val() ? $this.addClass('active-label') : $this.removeClass('active-label')
  });

  // Responsive title
  $(".header_title__wrapper h1").fitText(1.1, { minFontSize: '28px', maxFontSize: '70px' });
  $("h2").fitText(1.1, { minFontSize: '35px', maxFontSize: '50px' });
});
