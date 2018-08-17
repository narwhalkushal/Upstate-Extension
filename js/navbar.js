function openNav() {
    document.getElementById("mySidenav").style.width = '250px';
    $('#mySidenav').css('border',  '3px solid white');
    $('#mySidenav').css('border-left',  '0');
    $('#mySidenav').css('border-top',  '0');
    $('#mySidenav').css('border-top-right-radius',  '0');
    $('#mySidenav').css('border-bottom-left-radius',  '0');
    // $('#nav-icon2 span').css('background', 'white');
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $('#mySidenav').css('border',  '0');
    // $('#nav-icon2 span').css('background', 'var(--main-color)');
}

$('#nav-icon2').click(function() {
    if ($('#mySidenav').width() == 0) {
        openNav();
    }
})
document.addEventListener("click", (evt) => {
    const flyoutElement = document.getElementById("mySidenav");
    let targetElement = evt.target; // clicked element

    do {
        if (targetElement == flyoutElement) {
            // This is a click inside. Do nothing, just return.
            return;
        }
        // Go up the DOM
        targetElement = targetElement.parentNode;
    } while (targetElement);

    if ($('#mySidenav').width() > 0) {
        console.log($('#nav-icon2').width());
        closeNav();
         if (event.target.id != 'nav-icon2' && event.target.className != 'icon-span') {
             $('#nav-icon2').click();
             // return;
         }
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

$('.app-title').click(function() {
    copyPageUrl();
    $('.app-title').css('display', 'none');
    $('.app-title-2').css('display', 'block');
    setTimeout(function() {
        $('.app-title').css('display', 'block');
        $('.app-title-2').css('display', 'none');

    }, 2000);
})
function sleep(milliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + milliseconds >= new Date().getTime()) {
   }
}
// Detect all clicks on the document

toggler('fb-toggle', '.facebook');
toggler('gmail-toggle', '.gmail');
toggler('netflix-toggle', '.netflix');
toggler('youtube-toggle', '.youtube');
toggler('npr-toggle', '.npr');
toggler('groupme-toggle', '.groupme');
toggler('presence-toggle', '.presence');
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
