<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=1">
    <meta name="MobileOptimized" content="width">
    <meta name="HandheldFriendly" content="true">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="msapplication-tap-highlight" content="no">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Main Page</title>
	<link rel="stylesheet" href="css/new_ziyonet/bootstrap.min.css">
	<link rel="stylesheet" href="css/new_ziyonet/font-awesome.css">
	<link rel="stylesheet" href="css/new_ziyonet/style.css">
</head>
<body>

	<!-- Enter Modal -->
	<div class="modal fade" id="enter" tabindex="-1" role="dialog" aria-labelledby="enterModal">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-body">
	      	<button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
	      	<div class="iframe_wrapper">
		        <iframe class="b-iframe" width="100%" height="500px" frameborder="0" id="id_uz" name="iduz_login" src="http://www.id.uz/uz/users/login/simple?method=post&amp;field_name=LoginForm[identity]&amp;auth_url=http://site.ziyonet.uz/uz/login?return_to=http://site.ziyonet.uz/uz/login"></iframe>
	        </div>
	      </div>
	    </div>
	  </div>
	</div>
	<?php 

		// Current Date and Month
		date_default_timezone_set('Asia/Tashkent'); // CDT
		$current_day_month = date('d/m');
		$current_month = date('m');

		// Holidays
		$spring = array(
			'start' => '3',
			'end' => '5'
		);
		$may_9 = array(
			'start' => '1/05',
			'end' => '31/05'
		);
		$ny = array(
			'start' => '1/12',
			'end' => '10/01'
		);
		$january_14 = array(
			'start' => '12/01',
			'end' => '18/01'
		);

		$holidays = '';

		// Spring
		if ($spring['start'] <= $current_month && $spring['end'] >= $current_month) {
			$holidays = 'spring';
		}

		// 9 May
		if ($may_9['start'] <= $current_day_month && $may_9['end'] >= $current_day_month) {
			$holidays = 'may_9';
		}

		// New year
		if ($ny['start'] <= $current_day_month && $ny['end'] >= $current_day_month) {
			$holidays = 'new_year';
		}

		// 14 January
		if ($january_14['start'] <= $current_day_month && $january_14['end'] >= $current_day_month) {
			$holidays = '14_january';
		}

	?>
	<div class="portal_header <?php echo $holidays;?> uz">
		<div class="area_animation">
			<div class="area_animation_bg"></div>
	        <ul class="circles">
		        <li></li>
		        <li></li>
		        <li></li>
		        <li></li>
		        <li></li>
		        <li></li>
		        <li></li>
		        <li></li>
		        <li></li>
		        <li></li>
		        <li></li>
	        </ul>
	    </div >
		
		<div class="portal_header_inform">
			<div class="row">
				<div class="col-xs-5 col-sm-6 col-md-4 col-lg-3">
					<div class="dropdown text-left">
						<button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  class="white_btn">
							O'zbekcha
					    	<i class="fas fa-chevron-down"></i>
						</button>
						<ul class="dropdown-menu" aria-labelledby="dLabel">
					    	<li><a href="javascript:void(0);">Ўзбекча</a></li>
					    	<li><a href="javascript:void(0);">Русский</a></li>
						</ul>
					</div>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-4 col-lg-6">
					<div class="logo_wrap text-center">
						<div class="logo_ziyonet"></div>
					</div>
				</div>
				<div class="col-xs-7 col-sm-6 col-md-4 col-lg-3">
					<div class="login_wrap text-right">
						<a href="javascript:void(0);" class="login white_btn" data-toggle="modal" data-target="#enter"><i class="fas fa-sign-in-alt"></i> <span> Kirish </span></a>
						<a href="javascript:void(0);" class="registration white_btn"><i class="fas fa-user-plus"></i> <span> Ro'yxatdan o'tish </span></a>
					</div>
				</div>
			</div>
			
		</div>
		<div class="main-wrapper">
			<a href="http://sites.ziyonet.uz/uz" target="_blank">
			    <div class="hex yellow hover_effect">
			    	<div class="circle"> <i class="fas fa-sitemap"></i></div>
			    	<div class="ribbon">Saytlar reestri</div>
			    </div>
		    </a>
		    <a href="http://lang.uz/" target="_blank">
				<div class="hex orange hover_effect">
					<div class="circle"> <i class="fas fa-language"></i></div>
			    	<div class="ribbon">
			    		<span>Xorijiy tillar</span>
		    		</div>
			  	</div>
			</a>
			<a href="http://audio.ziyonet.uz/uz" target="_blank">
				<div class="hex pink hover_effect">
					<div class="circle"> <i class="fas fa-file-audio"></i></div>
					<div class="ribbon">Audiokitoblar</div>
				</div>
			</a>
			<a href="http://library.ziyonet.uz/uz" target="_blank">
				<div class="hex red hover_effect">
					<div class="circle"> <i class="fab fa-leanpub"></i></div>
					<div class="ribbon">Kutubxona</div>
				</div>
			</a>
			<a href="http://ask.ziyonet.uz/uz" target="_blank">
				<div class="hex purple hover_effect">
					<div class="circle"> <i class="fas fa-comments"></i></div>
					<div class="ribbon">Savol-javoblar</div>
				</div>
			</a>
			<a href="http://games.ziyonet.uz/uz" target="_blank">
				<div class="hex teal hover_effect">
					<div class="circle"> <i class="fas fa-gamepad"></i></div>
					<div class="ribbon">O‘yinlar</div>
				</div>
			</a>
			<a href="http://institutions.ziyonet.uz/uz" target="_blank">
				<div class="hex blue hover_effect">
					<div class="circle"> <i class="fas fa-university"></i></div>
					<div class="ribbon">Ta‘lim muassasalari</div>
				</div>
			</a>
			<a href="http://abiturient.ziyonet.uz/uz" target="_blank">
				<div class="hex blue-dark hover_effect">
					<div class="circle"> <i class="fas fa-user-graduate"></i></div>
					<div class="ribbon">Abituriyent</div>
				</div>
			</a>
			<a href="http://sport.ziyonet.uz/" target="_blank">
				<div class="hex green hover_effect">
					<div class="circle"> <i class="fas fa-trophy"></i></div>
					<div class="ribbon">Sport</div>
				</div>
			</a>
			<a href="http://blogs.ziyonet.uz/uz" target="_blank">
				<div class="hex green-dark hover_effect">
					<div class="circle"> <i class="far fa-list-alt"></i></div>
					<div class="ribbon">Sayt-satellitlar</div>
				</div>
			</a>
			<a href="http://people.ziyonet.uz/uz" target="_blank">
				<div class="hex silver hover_effect">
					<div class="circle"> <i class="fa fa-user fa-street-view"></i></div>
					<div class="ribbon">Arboblar</div>
				</div>
			</a>
			<a href="http://army.ziyonet.uz/uz" target="_blank">
				<div class="hex gold hover_effect">
					<div class="circle"> <i class="fas fa-fighter-jet"></i></div>
					<div class="ribbon">Armiya va yoshlar</div>
				</div>
			</a>
		</div>
	</div>

	<!-- <footer>
		<a href="" target="_blank"><i class="fab fa-linkedin-in icons"></i></a>
		<a href="" target="_blank"><i class="fab fa-twitter icons"></i></a>
		<a href="" target="_blank"><i class="fab fa-github icons"></i></a>
		<a href="" target="_blank"><i class="fa fa-dribbble icons"></i></a>
	</footer> -->
	<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/main.js"></script>
</body>
</html>