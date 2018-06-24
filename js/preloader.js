// makes sure the whole site is loaded
$(window).ready( function() {
  // will first fade out the loading animation
  $("#status").delay(600).fadeOut('slow');

  // will fade out the whole DIV that covers the website.
  $("#preloader").delay(900).fadeOut("slow");

});
