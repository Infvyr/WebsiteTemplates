$(document).ready(function(){

    // owl-carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        margin:10,
        nav: false,

        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                // nav:true
            },
            600:{
                items:1,
                // nav:true
            },
            1000:{
                items:1,
                loop:true
            }
        }
    });

    // mobile menu
    $( ".hamburger" ).click(function() {
      $( ".header-menu" ).slideToggle( "slow", function() {
        $( ".hamburger" ).hide();
        $( ".cross" ).show();
    }).css("display","flex");
    });


    $( ".cross" ).click(function() {
      $( ".header-menu" ).slideToggle( "slow", function() {
        $( ".cross" ).hide();
        $( ".hamburger" ).show();
      });
    });

});
