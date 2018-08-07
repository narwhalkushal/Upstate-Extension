function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
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

$('.fb-toggle').click(function() {

    $('input[name="fb-toggle"]').on('click', function(){
    if ( $(this).is(':checked') ) {
        $('.facebook').show();
    }
    else {
        $('.facebook').hide();
    }
});

})

function toggler() {

    
}
