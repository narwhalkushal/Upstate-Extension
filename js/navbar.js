function openNav() {
    document.getElementById("mySidenav").style.width = '250px';
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$('.openbtn').click(function() {
    openNav();
});
$('.closebtn').click(function() {
    closeNav();
})

toggler('fb-toggle', '.facebook');
toggler('gmail-toggle', '.gmail');
toggler('netflix-toggle', '.netflix');
toggler('youtube-toggle', '.youtube');
toggler('npr-toggle', '.npr');
toggler('groupme-toggle', '.groupme');
toggler('linkedin-toggle', '.linkedin');
toggler('espn-toggle', '.espn');
toggler('amazon-toggle', '.amazon');
toggler('twitter-toggle', '.twitter');
toggler('reddit-toggle', '.reddit');
toggler('google-drive-toggle', '.google-drive');

function toggler(name, sitename) {

    $('input[name="' + name + '"]').on('click', function() {
        if ($(this).is(':checked')) {
            $(sitename).show();
        } else {
            $(sitename).hide();
        }
    });
    console.log(name);
}
