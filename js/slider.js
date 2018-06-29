$(document).ready(function() {

    $('.forecast-data').hide();
    $('.weather-pane').hover(function() {
        $('.forecast-data').slideDown(250);
        $('.temp-range').hide(150);
    }, function() {
        $('.temp-range').slideDown(250, 'linear');
        $('.forecast-data').slideUp(250, 'linear');
    });

    $('.feedback').hide();
    $('.name-box').hover(function() {
        $('.feedback').show();
    })
});
