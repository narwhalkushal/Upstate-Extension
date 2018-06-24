$(window).bind("load resize", function modifyCSSvalues() {
  // function to set right column to same height as left column

  var docValues = getComputedStyle(document.body);
  docWidth = docValues.getPropertyValue('--maxwidth');
  docWidth = parseInt(docWidth.replace(/px/,""));
  elementSpacing = docValues.getPropertyValue('--elementspacing');
  elementSpacing = parseInt(elementSpacing.replace(/px/, ""));

  headerWidth = $('.header-pane').outerWidth();
  colWidth = (headerWidth-elementSpacing)/2;

  $('.left-column').css('max-width', colWidth);
  $('.right-column').css('max-width', colWidth);

  var divHeight = $('.link-btn').outerHeight();
  $('.left-column').outerHeight(5*divHeight + 4*elementSpacing);
  $('.right-column').outerHeight(5*divHeight + 4*elementSpacing);

  var buttonWidth = (headerWidth - 5*elementSpacing)/6;
  $('.upstate-seal').css('margin', )
  $('.upstate-seal').outerWidth(buttonWidth);
  $('.upstate-seal').outerHeight(buttonWidth);
  $('.btn-icon').outerWidth(buttonWidth);
  $('.btn-icon').outerHeight(buttonWidth);

  // $('#clock-value').css('font-size', 50);

  if (headerWidth < 480) {
    $('#clock-value').css('font-size', 40+ "px");
    $('#date-value').css('font-size', 35 +"px");
    $('#temp-value').css('font-size', 45+"px");
    $('#weather-desc').css('font-size', 25+"px");
  } else {
    $('#clock-value').css('font-size', 50);
    $('#date-value').css('font-size', 35);
    $('#temp-value').css('font-size', 75);
  }

  if (headerWidth < 570) {
    $('.weather-icon').css('font-size', 75+"px");
    $('#weather-desc').css('font-size', 25+"px");
  } else {
    $('.weather-icon').css('font-size', 85);
    $('#weather-desc').css('font-size', 35);
  }
});
