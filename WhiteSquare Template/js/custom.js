// slider code
var slideIndex = 1;
showDivs(slideIndex);

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlider");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" slide_active", "");
  }
  x[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " slide_active";
}

// swiper code for section our-clients
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 7,
    spaceBetween: 30,
    freeMode: true,
    preventClicks: true
});

// hamburger menu on small screens
$( document ).ready(function() {

  // $( ".cross" ).hide();
  // $( ".menu" ).hide();
  $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
      $( ".hamburger" ).hide();
      $( ".cross" ).show();
    });
  });


  $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
    });
  });

});
