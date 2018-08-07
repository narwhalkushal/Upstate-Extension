$(document).ready( function() {

    showTime();

})


function showTime(){
    var date = new Date();
    var hour = date.getHours(); // 0 - 23
    var min = date.getMinutes(); // 0 - 59
    var sec = date.getSeconds(); // 0 - 59
    var ampm = (hour < 12) ? " AM" : " PM";

    var year = date.getFullYear(); //
    var mon = date.getMonth(); // 0 - 11
    var day = date.getDate(); // 0 - 31

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    const monthNamesAbbr = ["Jan", "Feb", "Mar", "Apr", "May", "June",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    mon = monthNames[mon];

    var dateString = mon + " " + day + ", " + year;

    hour = (hour > 12) ? hour - 12 : hour;
    hour = (hour == 0 ) ? 12 : hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    var time = hour + ":" + min + ":" + sec + ampm;

    $('#clock-value').html(time);
    $('#date-value').html(dateString);

    setTimeout(showTime, 1000);
}

function convertTimeValues(hour) {

    hour = (hour > 24) ? hour - 24 : hour;
    var ampm = (hour < 12) ? " AM" : " PM";

    hour = (hour > 12) ? hour - 12 : hour;
    hour = (hour == 0) ? 12 : hour;
    hour = hour + ampm;

    return hour;
}
