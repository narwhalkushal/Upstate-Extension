$(window).bind("load resize", function() {
    modifyCSSvalues();
});

function modifyCSSvalues() {
    // function to set right column to same height as left column

    var cssVariables = getComputedStyle(document.body);

    docWidth = cssVariables.getPropertyValue('--maxwidth');
    docWidth = parseInt(docWidth.replace(/px/, ""));

    elementSpacing = cssVariables.getPropertyValue('--elementspacing');
    elementSpacing = parseInt(elementSpacing.replace(/px/, ""));

    headerWidth = $('.header-pane').outerWidth();
    colWidth = (headerWidth - elementSpacing) / 2;

    $('.left-column').css('max-width', colWidth);
    $('.right-column').css('max-width', colWidth);

    var buttonHeight = $('.link-btn').outerHeight();
    $('.left-column').outerHeight(5 * buttonHeight + 4 * elementSpacing);
    $('.right-column').outerHeight(5 * buttonHeight + 4 * elementSpacing);

    var buttonWidth = (headerWidth - 5 * elementSpacing) / 6;
    $('.upstate-seal').outerWidth($('.upstate-seal').outerHeight());
    $('.sun-times').outerWidth($('.liner-box').outerWidth());
    $('.forecast-data').outerWidth($('.liner-box').outerWidth());

    $('.btn-icon').outerWidth(buttonWidth);
    $('.btn-icon').outerHeight(buttonWidth);
    // $('#weather-desc').css('font-size', 25 + "px");

    if (headerWidth < 480) {
        $('#clock-value').css('font-size', 40 + "px");
        $('#date-value').css('font-size', 35 + "px");
        $('#temp').css('font-size', 45 + "px");
    } else {
        $('#date-value').css('font-size', 35);
        $('#temp').css('font-size', 45);
        $('.weather-icon-small').css('font-size', 40);
    }

    if (headerWidth < 570) {
        $('.weather-icon').css('font-size', "110%");
    } else {
        var weatherWidth = $('.weather-pane').outerWidth();
        $('.weather-icon').css('font-size', 40);
        $('.weather-icon-small').css('font-size', 40);
    }
}
