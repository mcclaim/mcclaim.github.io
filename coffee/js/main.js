$(document).ready(function() {
	// Ajax отправка почты с сайта
	$("form").submit(function(){ // перехватываем все при событии отправки
        var form = $(this); // запишем форму, чтобы потом не было проблем с this
        var error = false; // предварительно ошибок нет
        if (!error) { // если ошибки нет
            var data = form.serialize(); // подготавливаем данные
            $.ajax({ // инициализируем ajax запрос
               type: 'POST', // отправляем в POST формате, можно GET
               url: 'send.php', // путь до обработчика, у нас он лежит в той же папке
               data: data, // данные для отправки
               beforeSend: function(data) { // событие до отправки
                    form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
                  },
               success: function(data){ // событие после удачного обращения к серверу и получения ответа
                    if (data['error']) { // если обработчик вернул ошибку
                        alert(data['error']); // покажем её текст
                    } else { // если все прошло ок
                        alert('Ваше письмо отправлено'); // пишем что все ок
                    }
                 },
               error: function (xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
                    alert(xhr.status); // покажем ответ сервера
                    alert(thrownError); // и текст ошибки
                 },
               complete: function(data) { // событие после любого исхода
                    form.find('input[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
                 }
                          
                 });
        }
        return false; // вырубаем стандартную отправку формы
    });

    // Проверка на цифру
	    $("input[name='phone']").keydown(function(event) {
	        // Разрешаем нажатие клавиш backspace, Del, Tab и Esc
	        if ( event.keyCode == 46 || event.keyCode == 107 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
	             // Разрешаем Shift + 
	            (event.shiftKey === true && event.keyCode == 187) ||
	             // Разрешаем выделение: Ctrl+A
	            (event.keyCode == 65 && event.ctrlKey === true) ||
	             // Разрешаем клавиши навигации: Home, End, Left, Right
	            (event.keyCode >= 35 && event.keyCode <= 39)) {
	                 return;
	        }
	        else {
	            // Запрещаем всё, кроме клавиш цифр на основной клавиатуре, а также Num-клавиатуре
	            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	                event.preventDefault();
	            }  
	        }
	    });

    // Спуск до якоря
    $(document).on("click","a#feedback_btn", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1100);
    });

});
function setVideo() {
	$('.inform_video a.play').remove();
    $('#video_wrap').html('<div class="inform_video_wrapper"><iframe src="https://www.youtube.com/embed/nRTJd91G04Q?modestbranding=1;rel=0;autohide=3;controls=1;autoplay=1;showinfo=3;iv_load_policy=3;" frameborder="0" allowfullscreen></iframe></div>');
}
