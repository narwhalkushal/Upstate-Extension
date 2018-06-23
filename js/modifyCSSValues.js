$(document).ready(function modifyCSSvalues() {

  // function to set right column to same height as left column

  var docValues = getComputedStyle(document.body);
  docWidth = docValues.getPropertyValue('--maxwidth');
  docWidth = parseInt(docWidth.replace(/px/,""));
  elementSpacing = docValues.getPropertyValue('--elementspacing');
  elementSpacing = parseInt(elementSpacing.replace(/px/, ""));

  colWidth = (docWidth-elementSpacing)/2;
  $('.left-column').css('max-width', colWidth);
  $('.right-column').css('max-width', colWidth);

  var divHeight = $('.link-btn').outerHeight();
  $('.left-column').outerHeight(5*divHeight + 4*elementSpacing);
  $('.right-column').outerHeight(5*divHeight + 4*elementSpacing);

  var buttonWidth = (docWidth - 5*elementSpacing)/6;
  $('.btn-icon').outerWidth(buttonWidth);
  $('.btn-icon').outerHeight(buttonWidth);



  // var docValues = getComputedStyle(document.body);
  // elementSpacing = docValues.getPropertyValue('--elementspacing');
  // elementSpacing = parseInt(elementSpacing.replace(/px/, ""));
  //
  // docWidth = docValues.getPropertyValue('--maxwidth');
  // docWidth = parseInt(docWidth.replace(/px/, ""));
  //

  // var leftWidth = $('.left-column').outerWidth();
  // $('.right-column').outerWidth(leftWidth);
  // $('.left-column').outerHeight((5*divHeight + 4*elementSpacing));
  //
  // var leftHeight = $('.left-column').outerHeight();
  // // var finalHeight = divHeight - elementSpacing;
  // $('.weather-pane').outerHeight(leftHeight);
  //
  // var buttonSpacing = $('.container').outerWidth();
  // var buttonWidth = ((buttonSpacing-5*elementSpacing)/6);
  // // $('.facebook').outerWidth(buttonWidth);
  // // $('.facebook').outerHeight(buttonWidth);
  // $('.btn-icon').outerWidth(buttonWidth);
  // $('.btn-icon').outerHeight(buttonWidth);

  // console.log($('.header-pane').outerWidth());
  //
  // console.log(elementSpacing)
  // console.log($('.left-column').outerWidth())
  // console.log($('.right-column').outerWidth())
  // console.log($('.facebook').outerWidth());
  // console.log($('.facebook').outerWidth());

  // var left = $(".link-btn").offset().left;
  // $('.btn-icon').css('right', elementSpacing);



});
