$(document).ready(function modifyCSSvalues() {

  // function to set right column to same height as left column
  var docValues = getComputedStyle(document.body);
  elementSpacing = docValues.getPropertyValue('--elementspacing');
  elementSpacing = parseInt(elementSpacing.replace(/px/, ""));

  docWidth = docValues.getPropertyValue('--maxwidth');
  docWidth = parseInt(docWidth.replace(/px/, ""));

  var divHeight = $('.link-btn').outerHeight();

  $('.left-column').outerWidth(.5*(docWidth-elementSpacing));
  $('.right-column').outerWidth(.5*(docWidth-elementSpacing));
  $('.left-column').outerHeight((5*divHeight + 4*elementSpacing));

  var leftHeight = $('.left-column').outerHeight();
  // var finalHeight = divHeight - elementSpacing;
  $('.weather-pane').outerHeight(leftHeight);

  var buttonSpacing = $('.left-column').outerWidth();
  var buttonWidth = (buttonSpacing-2*elementSpacing)/3;
  $('.btn-icon').outerWidth(buttonWidth);
  $('.btn-icon').outerHeight(buttonWidth);

  console.log($('.header-pane').outerWidth());

  console.log(elementSpacing)
  console.log($('.left-column').outerWidth())
  console.log($('.right-column').outerWidth())

  // var left = $(".link-btn").offset().left;
  // $('.btn-icon').css('right', elementSpacing);



});
