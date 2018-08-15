function openNav() {
    document.getElementById("mySidenav").style.width = '250px';
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var flag = 0;
$('#nav-icon2').click(function(event) {
    // console.log($('#mySidenav').outerWidth)
    if ($('#mySidenav').outerWidth() == 0) {
        openNav();
    } else {
        closeNav();
    }
});

$('body').on('click', function(event) {
    // if (event.target.id != 'mySidenav' && $())

    // var a = $('.nav').find('a.current').parent().prop('className');    console.log(a);
    console.log($(this).parentsUntil('#mySidenav'))
    // console.log(a[0].nodeName.toLowerCase());

});
// $(document).ready(function(){
//     // $(".switch").parentsUntil("#mySidenav").css({"color": "red", "border": "2px solid red"});
//     console.log($('.switch').parentsUntil('#mySidenav'))
// });


// document.addEventListener("click", function(event) {
//
//     if (event.target.id == '')
//     // If user clicks inside the element, do nothing
//     // if (event.target.closest("#mySidenav")) return;
//     // if ($(event.target.id == 'nav-icon2' && $('#mySidenav').outerWidth() == 0)) openNav();
//     // if (event.target.id == 'nav-icon2' && $('#mySidenav').outerWidth() > 0) {
//         // $('#nav-icon2').click();
//         // closeNav();
//     // }
//     // console.log(event.target.id);
//     // // if(event.target.id !== "nav-icon2" && !$(event.target).parents('nav-icon2').length) {
//     // if ($('#mySidenav').outerWidth() > 0 && event.target.id != 'mySidenav') {
//     //     $('#nav-icon2').click();
//     //     closeNav();
//     //     flag = 0;
//     // }
//     var container = $('#mySidenav');
//
//     // if the target of the click isn't the container nor a descendant of the container
//     if (!container.is(event.target) && container.has(event.target).length === 0)
//     {
//         // closeNav();
//     }
// });

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
