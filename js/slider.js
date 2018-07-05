$(document).ready(function() {

    $('.forecast-data').hide();
    $('.weather-pane').hover(function() {
        $('.forecast-data').slideDown(150, 'linear');
        $('.temp-range').slideUp(150, 'linear');
        $('.wind-data').slideUp(150, 'linear');
        $('.sun-times').slideUp(150, 'linear');
    }, function() {
        $('.temp-range').slideDown(250, 'linear');
        $('.wind-data').slideDown(250, 'linear');
        $('.sun-times').slideDown(250, 'linear');
        $('.forecast-data').slideUp(250, 'linear');
    });

    $('.feedback').hide();
    $('.name-box').hover(function() {
        $('.feedback').show();
    })
});
