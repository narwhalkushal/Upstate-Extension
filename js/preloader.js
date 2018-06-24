// makes sure the whole site is loaded
$(window).ready( function() {
  // will first fade out the loading animation
  // $('#status').fadeIn('fast');
  $("#status").delay(1000).fadeOut('slow');

  // will fade out the whole DIV that covers the website.
  $("#preloader").delay(1000).fadeOut("slow");
})
