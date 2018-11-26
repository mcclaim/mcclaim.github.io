$(document).ready(function() {
  $('[data-toggle="popover"]').popover()

  $("body").attr('data-offset', '130');

  $('.form-spy-content li a').click(function(event) {
      event.preventDefault();
      $($(this).attr('href'))[0].scrollIntoView();
      scrollBy(0, -130);
  });

  var conf = document.querySelector("#confirm-btn");
  conf.addEventListener("click", function() {
    msConfirm({
      title: 'Вы хотите выйти из страницы?',
      subtitle: 'Мы заметили что некоторые поля были изменены.',
      okText: 'Да, выйти',
      cancelText: 'Нет, остаться',
      dismissOverlay: true,
      onOk: function() {
          msAlert('Вы вышли из страницы');
      },
      onCancel: function() {
          msAlert('Вы остались');
      }
    });
  });


  // Table responsive max-width
  var body = document.querySelector('body').offsetWidth,
    tableRes = document.querySelector('.table-responsive'),
    tableWidth = body - 355;

  if ($('.table-responsive').length) {
    tableRes.style.maxWidth = tableWidth + 'px';
  }

	// Add slideDown for dropdown
	$('.dropdown').on('show.bs.dropdown', function() {
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
	});

	// Add slideUp for dropdown
	$('.dropdown').on('hide.bs.dropdown', function() {
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
	});

	// Add accordion for menu
	function Accordion () {
		var item = '.main-menu .nav-dropdown';
		var itemActive = '.main-menu .nav-dropdown.active';

		$(document).on('click touch', item, function(){
			if (!$(this).hasClass('active')) {
				$(item).removeClass('active').find('.nav-sub').slideUp(400);
			}
			$(this).addClass('active').find('.nav-sub').slideDown(400);
		});
		$(document).on('click touch', itemActive, function(){
			$(this).removeClass('active').find('.nav-sub').slideUp(400);
		});
	}

	Accordion();

	// Other scripts

	$("[data-q-action]").on("click touch", function(e) {
    	e.stopPropagation();
    	var $this = $(this),
    		action = $(this).data("q-action");
    	switch (action) {
        /*-----------------------------------------------------------------------
        Site Search Open/Close
        -----------------------------------------------------------------------*/
        /**
         * Action: Open
         **/
        case "open-site-search":
          var $target = $(".top-toolbar.navbar-desktop .navbar-form");
          $target.find(".navbar-search").focus();
          $target.addClass("open");

          break;

          /**
           * Action: Close
           **/
        case "close-site-search":
          var $target = $(".top-toolbar .navbar-form");
          $target.find(".navbar-search").val("");
          $target.removeClass("open");

          break;
        }
	});

	// Toggle menu states
    var $toggleElement = $("[data-toggle-state]");
    $("[data-toggle-state]").on("click", function(e) {
      e.stopPropagation();
      var $body = $("body"),
        element = $(this),
        className = element.data("toggleState"),
        //key = element.data('key'),
        $target = $body;
      if (className) {
        if ($target.hasClass(className)) {
          element.parent().removeClass('show');
          $target.removeClass(className);
        } else {
          element.parent().addClass('show');
          $target.addClass(className);
        }
      }
      menuIconState(className);
      backdropState(className);
    });

    // Toggle menu icon on Default Menu open/close
    var menuIconState = function(className) {
      if (className === "mini-sidebar") {
        if ($("body.mini-sidebar").length > 0) {
          $('[data-toggle-state="mini-sidebar"] > i')
            .removeClass("la-dot-circle-o")
            .addClass("la-circle");
        } else {
          $('[data-toggle-state="mini-sidebar"] > i')
            .removeClass("la-circle")
            .addClass("la-dot-circle-o");
        }
      }
    };
    
    // Load backdrop when sidebar is open
    var backdropState = function(className) {
      var backDrop =
        '<div class="aside-overlay-fixed" data-aos="fade-in" data-aos-duration="300"></div>';
      if (
        $("body.aside-right-open").length > 0 ||
        $("body.aside-left-open").length > 0 ||
        $("body.mail-compose-open").length > 0
      ) {
        $("body").append(backDrop);
        $(".aside-overlay-fixed").on("click", function() {
          $(this)
            .closest('body')
            .find('.top-toolbar .navbar-nav .nav-item.show')
            .removeClass('show');
          $(this)
            .fadeOut("fast")
            .remove();
          $("body").removeClass(
            "aside-right-open aside-left-open mail-compose-open"
          );
        });
      }
    };

    // To-do
    $('.to-do-list input[type=checkbox]').on("click", function() {
	    if ($(this).prop('checked'))
	        $(this).parent().addClass('done-task');
	    else
	        $(this).parent().removeClass('done-task');
	});

    // Charts

    if ($('#chartjs_lineChart').length) {
		var ctx = document.getElementById('chartjs_lineChart').getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'line',
			responsive: true,
			data: {
				labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
				datasets: [{
					label: 'apples',
					data: [12, 19, 3, 17, 6, 3, 7],
					backgroundColor: "rgba(88, 103, 195,0.4)",
					borderColor: "rgba(88, 103, 195,0.7)",
					borderWidth: .6
				}, {
					label: 'oranges',
					data: [2, 29, 5, 5, 2, 3, 10],
					backgroundColor: "rgba(28, 134, 191,0.4)",
					borderColor: "rgba(28, 134, 191,0.7)",
					borderWidth: .6
				}]
			}
		});
	}



  // Custom table calc length

  var th = document.querySelectorAll('.custom-table th'),
      thLength = th.length,
      getWidth = 100 / thLength;

  if (thLength) {
    th.forEach(function(item, i, arr) {
      th[i].style.width = getWidth + '%';
    });
  }

  // Sorting block toggle
  var filter = $("span.filter");
  if (filter.length) {
    filter.on('click touch', function(event) {
      event.preventDefault();
      $(this).closest('th').toggleClass('filter_open').find('.filter_block').slideToggle();
    });
    $(document).click(function(e) {
      if ( $(e.target).closest('.filter_block, .dripicons-media-shuffle').length === 0 ) {
        $(".filter_block").slideUp().closest('.filter_open').toggleClass('filter_open');;
      }
    });
  }

  // Selected Client dropdown
  $(document).on('click touch', '.client-selected-wrap button.close', function(event) {
    event.preventDefault();
    $(this).closest('.client-selected').toggleClass('client-selected-close');
  });

});