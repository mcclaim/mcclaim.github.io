$(function () {
	
	var $container = $(".main-wrapper"), $articles = $container.find(".hover_effect"), timeout;
	$articles.on('mouseenter', function(event) {
		var $article = $(this);
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			if ($article.hasClass('ne_matoviy')) return false;
			$articles.not($article).removeClass('ne_matoviy').addClass('matoviy');
			$article.removeClass('matoviy').addClass('ne_matoviy');
		}, 75);
		$container.on('mouseleave', function(event) {
			clearTimeout(timeout);
			$articles.removeClass('ne_matoviy matoviy');
		});
	});

});