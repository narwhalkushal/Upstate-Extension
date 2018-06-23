$(document).ready(function modifyCSSvalues() {

  // function to set right column to same height as left column
  var elementSpacing = getComputedStyle(document.body);
  elementSpacing = elementSpacing.getPropertyValue('--elementspacing');
  elementSpacing = parseInt(elementSpacing.replace(/px/, ""));
  var divHeight = $('.link-btn').outerHeight();

  $('.left-column').outerHeight((5*divHeight + 4*elementSpacing))

  var leftHeight = $('.left-column').outerHeight();
  // var finalHeight = divHeight - elementSpacing;
  $('.weather-pane').outerHeight(leftHeight);

  var buttonSpacing = $('.header-pane').outerWidth();
  var buttonWidth = (buttonSpacing-5*elementSpacing)/6;
  $('.btn-icon').outerWidth(buttonWidth);
  $('.btn-icon').outerHeight(buttonWidth);
  console.log($('.container').outerWidth())
  console.log($('.left-column').outerWidth())

  // var left = $(".link-btn").offset().left;
  // $('.btn-icon').css('right', elementSpacing);



});
