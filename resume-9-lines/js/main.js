(function () {
'use strict';

// Set information
$('input').each(function () {
	var $this = $(this);
	$this.val() ? $this.addClass('is-have-inform') : $this.removeClass('is-have-inform');
});

$('input').change(function () {
	var $this = $(this);
	$this.val() ? $this.addClass('is-have-inform') : $this.removeClass('is-have-inform');
});

// Js skill meter
var rang = $('.js-skills');
var progress = $('#progress');

var frameCount = 400;
var frameInterval = 0.3;
var digitValueMax = 3000;
var statValueMax = 3000;
var statValueCurrent = 0;
var statValueInterval = statValueMax / frameCount;

updateDetails();

$('.retry-button').on('click', function () {
	statValueCurrent = 0;
	updateDetails();
});

function updateDetails() {
	if (statValueCurrent.toFixed(1) > statValueMax) {
		return;
	}
	setStatValue(statValueCurrent.toFixed(1));
	statValueCurrent += statValueInterval;
	setTimeout(updateDetails, frameInterval);
}

function setStatValue(value) {
	var angle = -120 + 180 * (value / digitValueMax);
	var angle = angle + 70;
	var value = Math.round(value);
	var arrow = $('.meter-arrow-circle, #progress');
	progress.css({
		'transform': 'rotate(' + angle + 'deg)'
	});

	var arrowColor = angle < 3 ? '#3e3d40' : angle < 78 ? '#a3cd3b' : angle < 131 ? '#0093d7' : '#3e3d40';

	arrow.css('fill', arrowColor);
	rang.find('.js-skills__rang-on-number').text(value);
}

}());
//# sourceMappingURL=main.js.map
