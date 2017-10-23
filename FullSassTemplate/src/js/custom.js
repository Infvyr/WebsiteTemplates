// Custom code for hamburger menu
(function() {

    // scroll to sections
    $('a[data-target^="anchor"]').bind('click.smoothscroll', function() {
        var target = $(this).attr("href"),
            offTop = $(target).offset().top;
            $('body, html').animate(
                {
                    scrollTop: offTop
                }, 700 );
        return false;
    });

    // hamburger menu (mobile menu)
    $('.page-nav__hamburger').on('click', function() {
        $('.page-nav__ul').toggle();
    });

    // portfolio tabs
    $(".tabs a").click(function() {
        $(this).parents(".tab-wrap").find(".tab-cont").addClass("hide");
		$(this).parent().siblings().removeClass("is-active");

		var id = $(this).attr("href");

		$(id).removeClass("hide");
		$(this).parent().addClass("is-active");
		return false;
	});

})();
