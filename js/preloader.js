// makes sure the whole site is loaded
$(window).ready( function() {
  // will first fade out the loading animation

  if ($(window).outerWidth() < 680){
    $('#preloader').css('font-size', '25px');
  } else {
    $('#preloader').css('font-size', '35px');
  }
  $("#status").delay(600).fadeOut('slow');

  // will fade out the whole DIV that covers the website.
  $("#preloader").delay(900).fadeOut("slow");

});
