// sticky menu

window.onscroll = function() { makeMenuSticky() };

var querySticky = document.querySelector("#sticky-container");
var sticky = querySticky.offsetTop;

function makeMenuSticky() {
  /*if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }*/

  if( window.scrollY >= sticky ) {
  	querySticky.classList.add("sticky");
    document.querySelector('.text-block').style.marginTop = 120 + 'px';
  } else {
    querySticky.classList.remove("sticky");
    document.querySelector('.text-block').style.marginTop = 0 + 'px';
  }
}


// counter js
(function($){
  $('.counter-number').counterUp({
    time: 800
});


})(jQuery);
