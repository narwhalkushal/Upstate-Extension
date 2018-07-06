$(document).ready(function() {



    // $('.weather-pane').hover(function() {
    //     $('.forecast-data').slideUp(100, );
    //     $('.sun-times').delay(100).fadeIn(100);
    // }, function() {
    //     $('.forecast-data').delay().show();
    //     $('.sun-times').delay().hide();
    // });
    //
    // $('.feedback').hide();
    // $('.name-box').hover(function() {
    //     $('.feedback').show();
    // })

    $(".weather-pane").hover(function(e) {
        goRight();
    }, function(e) {
        goLeft();
    });


    function goRight() { // inner stuff slides left
        var initalLeftMargin = $(".inner-liner").css('margin-left').replace("px", "") * 1;
        var newLeftMargin = -$('.right-column').outerWidth(); //(initalLeftMargin - $('.right-column').outerWidth()); // extra 2 for border
        $(".inner-liner").animate({
            marginLeft: newLeftMargin
        }, 200);
    }

    function goLeft() { // inner stuff slides right
        var initalLeftMargin = $(".inner-liner").css('margin-left').replace("px", "") * 1;
        var newLeftMargin = 0; //(initalLeftMargin + $('.right-column').outerWidth()); // extra 2 for border
        $(".inner-liner").animate({
            marginLeft: newLeftMargin
        }, 200);
    }


});
