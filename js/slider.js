$(document).ready(function() {

    hover();

});

function hover() {
    $(".weather-pane").hover(function(e) {
        goUp();
    }, function(e) {
        goDown();
    });
}

function goUp() { // inner stuff slides left
    var initialTopMargin = $(".inner-liner").css('margin-top').replace("px", "") * 1;
    var newTopMargin = -$('.slider-box').outerHeight();
    $(".inner-liner").animate({
        marginTop: newTopMargin
    }, 100, 'swing');
}

function goDown() { // inner stuff slides right
    var initalTopMargin = $(".inner-liner").css('margin-top').replace("px", "") * 1;
    var newTopMargin = 0; //(initalLeftMargin + $('.right-column').outerWidth()); // extra 2 for border
    $(".inner-liner").animate({
        marginTop: newTopMargin
    }, 100, 'swing');
}
