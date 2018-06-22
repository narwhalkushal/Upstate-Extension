$(document).ready(function modifyCSSvalues(){

  var elementSpacing = getComputedStyle(document.body);
  elementSpacing = elementSpacing.getPropertyValue('--elementspacing');
  elementSpacing = parseInt(elementSpacing.replace(/px/,""));
  var divHeight = $('.left-column').outerHeight();

  var finalHeight = divHeight - elementSpacing;
  $('.weather-pane').outerHeight(finalHeight);
  console.log(divHeight);
  console.log(elementSpacing);
  });
