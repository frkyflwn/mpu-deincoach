		(function ($) {
	  $(document).ready(function(){

		AOS.init();


		$('.fa-plus').click(function() {

			$('.fa-phone').toggleClass('active');
			$('.fa-plus').toggleClass('active');
			$('.fa-whatsapp').toggleClass('active');
			$('.fa-envelope').toggleClass('active');
			$('.fa-calendar-check').toggleClass('active');
			

		});

		

			
/* 
			$('.stickycontact .fa-phone').css({"background-color": "#fd7e14", 
			"transform": "translateX(-90px)",  
				
			

/* 			$('.fa-envelope').css({
	
				"transform": "translateX(-360px)",
				"visibility": "visible",
			})

			$('.fa-whatsapp').css({
				"transform": "translateX(-180px)",
				"visibility": "visible",
			})

			$('.stickycontact .fa-calendar-check').css({
				"transform": "translateX(-270px)",
				"visibility": "visible",
			})

			$('.fa-times').css({
	
				"visibility": "visible",
			}) */




		
	
	


		
		// hide .navbar first
		//$("#navbar").hide();
		
		// fade in .navbar
		$(function () {

			

		
			$(window).scroll(function () {
				// set distance user needs to scroll before we fadeIn navbar
				if ($(this).scrollTop() > 50 ) {

					$('.navbar-brand img').css('height', '35px');
					$('.navbar-brand img:last-of-type').hide();
					$('#navbar').addClass('bg-light');
					$('.stickycontact').fadeIn();
					
                //     $('#navbar').fadeIn();
                //    $('#navbar').css( {
                //     "background-color": '#ffffff',
                //     "transition": "0.5s"
                //    })
                     
				
				} else if ($(window).width() < 700) {

					$('.navbar-brand img:first-of-type').css('height', '60px');
					$('.navbar-brand img:last-of-type').show();
					$('.navbar-brand img:last-of-type').css('height', '35px');
					$('#navbar').removeClass('bg-light');
					$('.stickycontact').hide();
					


				} else {
					//$('#navbar').fadeOut();
					$('.navbar-brand img:first-of-type').css('height', '100px');
					$('.navbar-brand img:last-of-type').show();
					$('.navbar-brand img:last-of-type').css('height', '50px');
					$('#navbar').removeClass('bg-light');
					$('.stickycontact').hide();
				}
			});
	
		
		});

		$('a[href^="#"]').on('click',function(e) {
			e.preventDefault();
			var target = this.hash;
			var $target = $(target);
			$('html, body').stop().animate({
			 'scrollTop': $target.offset().top
			}, 900, 'swing', function () {
			 window.location.hash = target;
			});
		   });

		
		var bar = new ProgressBar.SemiCircle(semicirclebar, {
			strokeWidth: 6,
			color: '#FFEA82',
			trailColor: '#eee',
			trailWidth: 1,
			easing: 'easeInOut',
			duration: 1400,
			svgStyle: null,

			text: {
			  value: '',
			  alignToBottom: false,

			},
			from: {color: '#FFEA82'},
			to: {color: '#28a745'},
			// Set default step function for all animate calls
			step: (state, bar) => {
			  bar.path.setAttribute('stroke', state.color);
			  var value = Math.round(bar.value() * 100);
			  if (value === 0) {
				bar.setText('');
			  } else {
				bar.setText(value + "%");
			  }
		  
			  bar.text.style.color = state.color;
			}
		  });
		  bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
		  bar.text.style.fontSize = '4rem';
		  
		  bar.animate(0.96);  // Number from 0.0 to 1.0
	
	});
		}(jQuery));

	  

// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/


      
      