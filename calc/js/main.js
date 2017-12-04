$(document).ready(function() {
	
	// Таблеты Курса
    $("#course_container .course_tabs_menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab_content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });

    // Проверка на цифру
    $("#online_calc #number").keydown(function(event) {
      if ( event.keyCode == 46 || event.keyCode == 107 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
          (event.keyCode == 65 && event.ctrlKey === true) ||
          (event.keyCode >= 35 && event.keyCode <= 39)) {
            return;
      }
      else {
          if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
              event.preventDefault();
          }  
      }
    });
});