
// function makeMap(messages) {
// 	// $('#vmap').css(
// 	// 	{
// 	// 		'width':'100%'
// 	// 	}
// 	// );

// 	// $('#vmap').html('');

// 	$('.jqvmap-label').remove();

// 	function escapeXml(string) {
// 	  return string.replace(/[<>]/g, function (c) {
// 	    switch (c) {
// 	      case '<': return '\u003c';
// 	      case '>': return '\u003e';
// 	    }
// 	  });
// 	}


// 	var pins = {
// 		an: escapeXml('<div class="map-pin"></div>'),
// 		qo: escapeXml('<div class="map-pin"></div>'),
// 		bu: escapeXml('<div class="map-pin"></div>'),
// 		qa: escapeXml('<div class="map-pin"></div>'),
// 		na: escapeXml('<div class="map-pin"></div>'),
// 		to: escapeXml('<div class="map-pin"></div>'),
// 		gu: escapeXml('<div class="map-pin"></div>'),
// 		sa: escapeXml('<div class="map-pin"></div>'),
// 		fa: escapeXml('<div class="map-pin"></div>'),
// 		ji: escapeXml('<div class="map-pin"></div>'),
// 		no: escapeXml('<div class="map-pin"></div>'),
// 		te: escapeXml('<div class="map-pin"></div>'),
// 		xo: escapeXml('<div class="map-pin"></div>'),
// 		tosh: escapeXml('<div class="map-pin"></div>')
// 	};

// 		var messages = {
// 			an: 'Андижанская область<br>выполнено 326 исследований',
// 			bu: 'Бухарская область<br>выполнено 326 исследований',
// 			fa: 'Ферганска область<br>выполнено 326 исследований',
// 			gu: 'Сырдарьинская область<br>выполнено 326 исследований',
// 			ji: 'Джизакская область<br>выполнено 326 исследований',
// 			na: 'Навоинская область<br>выполнено 326 исследований',
// 			no: 'Наманганская область<br>выполнено 326 исследований',
// 			qa: 'Джизакская область<br>выполнено 326 исследований',
// 			qo: 'Каракалпакская автономия<br>выполнено 326 исследований',
// 			sa: 'Самаркандская область<br>выполнено 326 исследований',
// 			te: 'Сурхандарьинская область<br>выполнено 326 исследований',
// 			to: 'Ташкентская область<br>выполнено 326 исследований',
// 			tosh: 'Ташкент<br>выполнено 326 исследований',
// 			xo: 'Каракалпакская автономия<br>выполнено 326 исследований'
// 		};
	

// 	$('#vmap').vectorMap({
// 		map: 'uzbekistan',
// 		backgroundColor: 'transparent',
// 		pins: pins,
// 		pinMode: 'content',
// 		color: '#FF6600',
// 		hoverColor: '#5360a6',
// 		enableZoom: false,
// 		showTooltip: true,
// 		borderColor: '#fff',
// 		borderWidth: 1,
// 		borderOpacity: 1,
// 		onLabelShow: function (event, label, code) {
// 			label.html(messages[code]);
// 		},
// 		onRegionOver: function (event, label, code) {
// 			$('#jqvmap1_'+label+'_pin .map-pin').css({'opacity': 0})
// 		},
// 		onRegionOut: function (event, label, code) {
// 			$('#jqvmap1_'+label+'_pin .map-pin').css({'opacity': 1})
// 		},
// 		onRegionClick: function (element, code, region) {
// 			switch (code){
// 				case 'an':
// 					id = 4;
// 				break;
// 				case 'bu':
// 					id = 5;
// 					break;
// 				case 'fa':
// 					id = 14;
// 					break;
// 				case 'gu':
// 					id = 12;
// 					break;
// 				case 'ji':
// 					id = 6;
// 					break;
// 				case 'na':
// 					id = 8;
// 					break;
// 				case 'no':
// 					id = 9;
// 					break;
// 				case 'qa':
// 					id = 7;
// 					break;
// 				case 'qo':
// 					id = 3;
// 					break;
// 				case 'sa':
// 					id = 10;
// 					break;
// 				case 'te':
// 					id = 11;
// 					break;
// 				case 'to':
// 					id = 13;
// 					break;
// 				case 'tosh':
// 					id = 16;
// 					break;
// 				case 'xo':
// 					id = 15;
// 					break;
// 			}
			
// 		}
// 	});


// 	$('.close').click(function(){
// 		$('#listOtm').hide();
// 		$('#vmap').show();
// 	});


// }


