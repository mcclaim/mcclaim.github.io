$(document).ready(function() {
	// Ajax отправка почты с сайта
	$("form").submit(function() { //устанавливаем событие отправки для формы с id=form
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "send.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                   //код в этом блоке выполняется при успешной отправке сообщения
                   alert("Ваше сообщение отпрвлено!");
            });
    });
});
function setVideo() {
	$('.inform_video a.play').remove();
    $('#video_wrap').html('<div class="inform_video_wrapper"><iframe src="https://www.youtube.com/embed/nRTJd91G04Q?modestbranding=1;rel=0;autohide=3;controls=1;autoplay=1;showinfo=3;iv_load_policy=3;" frameborder="0" allowfullscreen></iframe></div>');
}
