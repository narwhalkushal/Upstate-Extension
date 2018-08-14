function openNav() {
    document.getElementById("mySidenav").style.width = '250px';
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var flag = 0;
$('#nav-icon2').click(function() {
    if (!flag) {
        openNav();
        flag = 1;
    } else {
        closeNav();
        flag = 0;
    }
});
async function copyPageUrl() {

    var urlTemp = document.createElement("input");
    document.body.appendChild(urlTemp);
    urlTemp.setAttribute("id", "temp_id");
    document.getElementById("temp_id").value = 'https://chrome.google.com/webstore/detail/accessupstate/ldlnlbaikjjnnpfccaoabbebafmgaeje';
    urlTemp.select();
    document.execCommand("copy");
    document.body.removeChild(urlTemp);

}
copyPageUrl();
// Detect all clicks on the document
// document.addEventListener("click", function(event) {
//     // If user clicks inside the element, do nothing
//     if (event.target.closest("#mySidenav")) return;
//     if ($(event.target.id == 'nav-icon2' && $('#mySidenav').outerWidth() == 0)) openNav();
//     if (event.target.id == 'nav-icon2' && $('#mySidenav').outerWidth() > 0) {
//         $('#nav-icon2').click();
//         closeNav();
//     }
//     if ($('#mySidenav').outerWidth() > 0 && event.target.id != 'mySidenav') {
//         $('#nav-icon2').click();
//         closeNav();
//     }
// });


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
toggler('google-calendar-toggle', '.google-calendar');

function toggler(name, sitename) {

    $('input[name="' + name + '"]').on('click', function() {
        if ($(this).is(':checked')) {
            $(sitename).show();
        } else {
            $(sitename).hide();
        }
    });
}

function storeUserPrefs() {
    var myText = [];

    chrome.storage.sync.set({
        mytext: 'hey'
    });

}

storeUserPrefs();

$(document).ready(function() {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function() {
        $(this).toggleClass('open');
    });
});
