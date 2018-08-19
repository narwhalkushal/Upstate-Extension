function openNav() {
    $('#mySidenav').fadeIn(120);
    $('#mySidenav').width('250px');
    $('#mySidenav').css('border',  '3px solid white');
    $('#mySidenav').css('border-left',  '0');
    $('#mySidenav').css('border-top',  '0');
    $('#mySidenav').css('border-top-right-radius',  '0');
    $('#mySidenav').css('border-bottom-left-radius',  '0');
    // $('#nav-icon2 span').css('background', 'white');
}

function closeNav() {
    $('#mySidenav').fadeOut(120);
    $('#mySidenav').width(0);
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
        closeNav();
         if (event.target.id != 'nav-icon2' && event.target.className != 'icon-span') {
             $('#nav-icon2').click();
             // return;
         }
    }
});
$(document).ready(function() {
    $('#nav-icon2').click(function() {
        $(this).toggleClass('open');
    });
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

var toggleClasses = ['.facebook', '.gmail', '.netflix', '.youtube', '.npr', '.groupme', '.presence', '.linkedin', '.espn', '.amazon', '.twitter', '.reddit', '.google-calendar'];
var toggleNames = ['fb-toggle', 'gmail-toggle', 'netflix-toggle', 'youtube-toggle', 'npr-toggle', 'groupme-toggle', 'presence-toggle', 'linkedin-toggle', 'espn-toggle', 'amazon-toggle', 'twitter-toggle', 'reddit-toggle', 'google-calendar-toggle'];

$(':checkbox').click(function(event) {
    setStorage(event.target.className, $(this).is(':checked'));
    // console.log(event.target.className);
    var temp = toggleNames.indexOf(event.target.className);
    if ($(this).is(':checked')) {
        $(toggleClasses[temp]).show();
    } else {
        $(toggleClasses[temp]).hide();
    }
});

function setStorage(keyChain, value) {
    // keyChain = '"' + keyChain + '"'
    chrome.storage.sync.set({[keyChain]: value}, function() {
        // console.log(keyChain)
        // console.log(value);
            });
}
function useStorage(keyChain) {
    // console.log("'" + keyChain + "'")

    chrome.storage.sync.get(["'" + keyChain + "'"], function(result) {
        console.log(result);
        // console.log(result.youtube-toggle);
        // console.log(key);
        // console.log(result.key);
        // var temp = toggleNames.indexOf(result);
        // console.log(value);
        // if (result.key) {

        // }
    });

}

$(document).ready(function() {
    for (var i = 0; i < toggleNames.length; i++) {
        var tempName = 
        useStorage(toggleNames[i]);
    }
    chrome.storage.sync.get(null, function(items) {
    var allKeys = Object.values(items);
    console.log(allKeys);
    console.log(Object.keys(items))
});
})
