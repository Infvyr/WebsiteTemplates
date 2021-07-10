(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a#js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 58)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // add fixed class to menu on scroll page
    $(window).scroll(function() {
        if ($(this).scrollTop() > 30) {
            $("#navbar").addClass("fixed");
        } else {
            $("#navbar").removeClass("fixed");
        }
    });

    // portfolio tabs
    $(".tabs li a").click(function(event) {
    	event.preventDefault();
    	event.stopPropagation();

        $(this).parents("section#portfolio").find(".tabs-content").addClass("hide");
        $(this).parent().siblings().removeClass("tab-active");

        // click on links with href=#tab1 etc.
        var id = $(this).attr("href");
        $(id).removeClass("hide");

        $a = $(this).parent().addClass("tab-active");
        return false;
    });

    // Closes responsive menu when click on menu links
    $('a#js-scroll-trigger').on("click", function(event) {
    	event.preventDefault();
    	event.stopPropagation();

        if ($(document).width() <= 792) {
            $("#toggleMenu").removeClass("change");
            $(".menu").slideUp();
        }

        return false;
    });

})(jQuery); // End of use strict

$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        navText: [
          "<i class='fa fa-chevron-left'></i>",
          "<i class='fa fa-chevron-right'></i>"
          ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true
            }
        }
    });

    // hamburger toggle menu
    $("#toggleMenu").on("click", function() {
        $(this).toggleClass("change");
        var menu = $(".menu");
        menu.slideToggle();
        return false;
    });
});