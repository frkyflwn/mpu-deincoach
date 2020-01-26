		(function ($) {
	  $(document).ready(function(){
		
		// hide .navbar first
		//$("#navbar").hide();
		
		// fade in .navbar
		$(function () {
			$(window).scroll(function () {
				// set distance user needs to scroll before we fadeIn navbar
				if ($(this).scrollTop() > 50 ) {

                    $('#navbar').addClass('bg-light');
$('#navbar').addClass('bg-light');
                //     $('#navbar').fadeIn();
                //    $('#navbar').css( {
                //     "background-color": '#ffffff',
                //     "transition": "0.5s"
                //    })
                     
				
				} else {
                    //$('#navbar').fadeOut();
                    $('#navbar').removeClass('bg-light');
				}
			});
	
		
		});
	
	});
      }(jQuery));
      
      