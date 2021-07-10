$(document).ready(function() {

	// portfolio tabs
    $(".tabs a").click(function() {
        $(this).parents(".personal-works").find(".tabs_content").addClass("hide");
		$(this).parent().siblings().removeClass("is-active");

		var id = $(this).attr("href");

		$(id).removeClass("hide");
		$(this).parent().addClass("is-active");
		return false;
	});

    // fancyBox3 present images in grid 
  	$('[data-fancybox]').fancybox({
  		transitionEffect : "zoom-in-out",
  		mobile : {
	        clickContent : function( current, event ) {
	            return current.type === 'image' ? 'toggleControls' : false;
	        },
	        clickSlide : function( current, event ) {
	            return current.type === 'image' ? 'toggleControls' : 'close';
	        },
	        dblclickContent : function( current, event ) {
	            return current.type === 'image' ? 'zoom' : false;
	        },
	        dblclickSlide : function( current, event ) {
	            return current.type === 'image' ? 'zoom' : false;
	        }
	    },
	    baseTpl	:
        '<div class="fancybox-container" role="dialog" tabindex="-1">' +
            '<div class="fancybox-bg"></div>' +
                '<div class="fancybox-stage"></div>' +
                '<div class="fancybox-caption-wrap">' +
                    '<div class="fancybox-caption"></div>' +
                '</div>' +
            '</div>' +
        '</div>',


  	});

});