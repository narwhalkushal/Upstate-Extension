$(document).ready(function() {
    scaleDisplay();
    modifyDisplay();
});

$(window).on('resize', function() {
    modifyDisplay();
});

var cssVariables = getComputedStyle(document.body);
var docWidth = cssVariables.getPropertyValue('--maxwidth');

function scaleDisplay() {

    // var scaleValue = screen.width/1680*.9;
    var cssVariables = getComputedStyle(document.body);
    // $('body').css('font-size', screen.realwidth/112);
    // $('.scaler').css('transform', 'scale(' + scaleValue + ')');
    // $('.sidenav').css('transform', 'scale(' + scaleValue + ')');
    // $('#nav-icon2').css('transform', 'scale(' + scaleValue + ')');
    // document.documentElement.style.setProperty('--element-spacing', '5px');
    // document.documentElement.style.setProperty('--margin-spacing', '5px');
}

function buttonCount() {
    var selected = [];
    $('#mySidenav input:checked').each(function() {
        selected.push($(this).attr('name'));
    });
    return selected.length;
}
function buttonSizer() {
    var count = buttonCount();
    var buttonWidth = Math.floor((headerWidth - count * elementSpacing) / count);
    if (buttonWidth > 100) {
        buttonWidth = 100;
    }
    $('.btn-icon').outerWidth(buttonWidth);
    $('.btn-icon').outerHeight(buttonWidth);
}
$('.switch').click(function() {
    buttonSizer();
});
function modifyDisplay() {
    // function to set right column to same height as left column


    docWidth = cssVariables.getPropertyValue('--maxwidth');

    docWidth = parseInt(docWidth.replace(/px/, ''));

    elementSpacing = cssVariables.getPropertyValue('--elementspacing');
    elementSpacing = parseInt(elementSpacing.replace(/px/, ''));

    headerWidth = $('.header-pane').outerWidth();
    headerHeight = cssVariables.getPropertyValue('--headerheight');

    colWidth = (headerWidth - elementSpacing) / 2;

    $('.left-column').css('max-width', colWidth);
    $('.right-column').css('max-width', colWidth);

    var buttonHeight = $('.link-btn').outerHeight();
    $('.left-column').outerHeight(5 * buttonHeight + 4 * elementSpacing);
    $('.right-column').outerHeight(5 * buttonHeight + 4 * elementSpacing);

    buttonSizer();

    $('.sun-times').outerWidth($('.liner-box').outerWidth());
    $('.forecast-data').outerWidth($('.liner-box').outerWidth());


    $('.upstate-seal').outerWidth($('.upstate-seal').outerHeight())

    $('.upstate-cal').outerWidth(headerWidth);
    // $('.calendar-container').outerWidth(headerWidth/docWidth*100 + '%');
    if ($('.fc-center').outerWidth()>160) {
        // $('.fc-center').css('font-size', '11px');
    } else {
        // $('.fc-center').css('font-size', '13px');
    }
    if (headerWidth >= .9*docWidth) {
        $('#clock-value').css('font-size', '50px');
        $('#date-value').css('font-size', '30px');
        $('.upstate-seal').css('height', '100%');
    } else {
        $('#clock-value').css('font-size', headerWidth/14);
        $('#date-value').css('font-size', headerWidth/22);
        $('.upstate-seal').css('height', '85%');
    }


    var startColWidth = (docWidth - elementSpacing)/2;

    if (colWidth == startColWidth) {
        $('.weather-icon').css('font-size', '45px');
        $('.weather-icon-small').css('font-size', '30px');
        $('.forecast-time').css('font-size', '20px');
        $('.forecast-temp').css('font-size', '20px');
        $('.weather-info').css('font-size', '30px');
        $('#weather-desc').css('font-size', '23px');
        $('#temp').css('font-size', '45px');
        $('.max-temp').css('font-size', '15px');
        $('.min-temp').css('font-size', '15px');
        $('.sun-desc').css('font-size', '20px');
        $('.extra-data').css('font-size', '18px');
        $('.sunrise').css('font-size', '18px');
        $('.sunset').css('font-size', '18px');
    } else {
        $('.weather-icon').css('font-size', colWidth/10);
        $('.weather-icon-small').css('font-size', colWidth/12);
        $('.forecast-time').css('font-size', colWidth/14);
        $('.forecast-temp').css('font-size', colWidth/14);
        $('.weather-info').css('font-size', colWidth/10);
        $('#weather-desc').css('font-size', colWidth/13);
        $('#temp').css('font-size', colWidth/7);
        $('.max-temp').css('font-size', colWidth/20);
        $('.min-temp').css('font-size', colWidth/20);
        $('.sun-desc').css('font-size', colWidth/20);
        $('.extra-data').css('font-size', colWidth/18);
        $('.sunrise').css('font-size', colWidth/18);
        $('.sunset').css('font-size', colWidth/18);
        // $('.fc-center').css('margin-right', colWidth - $('.fc-center').outerWidth()/2)

    }
}
