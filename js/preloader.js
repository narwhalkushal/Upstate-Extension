// makes sure the whole site is loaded
$(window).ready( function() {
  // will first fade out the loading animation
  console.log($(window).outerWidth());
  //
  $("#status").delay(200).fadeOut('slow');
  //
  // // will fade out the whole DIV that covers the website.
  $("#preloader").delay(300).fadeOut("slow");

});
