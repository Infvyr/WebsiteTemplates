(function($, undefined){
	$(function(){
		$(".swiper-wrapper a").click(function(event) {
	        event.preventDefault();
	        // optional, next 2 line
	        $('.swiper-wrapper a').parent().toggleClass("activeq");
	        $(this).parent().siblings().removeClass("activeq"); // .parent(). optional
	        var tabq = $(this).attr("href");
	        $(".quotes").not(tabq).css("display", "none");
	        $(tabq).fadeIn();
    	});
	});
})(jQuery);
