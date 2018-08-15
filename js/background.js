$(document).ready(function() {

    var imageCount = 6;

    var n = Math.floor(Math.random() * imageCount) + 1; // random integer from 1 to imageCount
    var imageUrl = 'url(../img/background-img/upstate-' + n + '.jpg';
    $('body').css('background-image', imageUrl);
});
