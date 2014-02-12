//##############################################################
// Written by Eric Eric Ellenbrook
// 
// http://github.com/ellenbrook/jQuery-scroll-distance-detection
// http://ericellenbrook.com
//
// Feel free to make this better. Fork it on Github.
//
//##############################################################

$(document).ready(function(){
	$(window).scroll(function(){
		
		// Change this to target a different percentage
		var targetPercentage = 70;
		//Change this to set the height of your nav bar so it hides properly. IF you have a box shadow you may have to adjust this number to be height + shadow distance
		var navBarHeight = 66;
		//Change this to the ID of the content you are trying to show.
		var targetID = "#navigation";
		
		//Window Math
		var scrollTo = $(window).scrollTop(),
		docHeight = $(document).height(),
		windowHeight = $(window).height();
		scrollPercent = (scrollTo / (docHeight-windowHeight)) * 100;
		scrollPercent = scrollPercent.toFixed(1);
			
		$('#percentageCounter h1').text(scrollPercent+"%");

		if(scrollPercent > targetPercentage) {
			$("#navigation").css({ top: '0' });
		}
		
		if(scrollPercent < targetPercentage) {
			$(targetID).css({ top: '-'+navBarHeight+'px' });
		}
								
	}).trigger('scroll');
});