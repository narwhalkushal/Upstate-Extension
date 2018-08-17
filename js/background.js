$(document).ready(function() {

    var imageCount = 11;

    var n = Math.floor(Math.random() * imageCount) + 1; // random integer from 1 to imageCount
    var imageUrl = 'url(../img/background-img/upstate-' + 8 + '.jpg';
    $('body').css('background-image', imageUrl);
});
