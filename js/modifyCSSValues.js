$(document).ready(function modifyCSSvalues() {

  // function to set right column to same height as left column
  var elementSpacing = getComputedStyle(document.body);
  elementSpacing = elementSpacing.getPropertyValue('--elementspacing');
  elementSpacing = parseInt(elementSpacing.replace(/px/, ""));
  var divHeight = $('.left-column').outerHeight();

  var finalHeight = divHeight - elementSpacing;
  $('.weather-pane').outerHeight(finalHeight);

  var buttonSpacing = $('.left-column').outerWidth();
  var buttonWidth = (buttonSpacing - 2*elementSpacing)/3;
  console.log(buttonWidth)
  console.log(buttonSpacing)
  $('.btn-icon').outerWidth(buttonWidth);
  console.log($('.right-column').outerWidth())
  console.log($('.btn-icon').outerWidth())


});
