$j = jQuery.noConflict();

$j(function () {
    $j("div#scrollTop").hide();
    // fix menu on scroll page after 65px from top of page
    $j(window).scroll(function () {
        if ($j(this).scrollTop() > 65) {
            $j('#fix-on-scroll').addClass("fixed");
        } else {
            $j('#fix-on-scroll').removeClass("fixed");
        }
    });

    // scroll top button
    $j(window).scroll(function () {
        if ($j(this).scrollTop() > 550) {
            $j('#scrollTop').fadeIn();
        } else {
            $j('#scrollTop').fadeOut();
        }
    });

    $j('#scrollTop a').on("click", function () {
        $j('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});