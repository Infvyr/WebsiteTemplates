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
  } else {
    querySticky.classList.remove("sticky");
  }
}
