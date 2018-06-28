window.onload = (function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var ampm = (h < 12) ? " AM" : " PM";

    var y = date.getFullYear(); //
    var mon = date.getMonth(); // 0 - 11
    var d = date.getDate(); // 0 - 31

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    const monthNamesAbbr = ["Jan", "Feb", "Mar", "Apr", "May", "June",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    mon = monthNames[mon];

    var dateString = mon + " " + d + ", " + y;

    h = (h > 12) ? h - 12 : h;
    h = (h == 0 ) ? 12 : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + ampm;

    $('#clock-value').html(time);
    $('#date-value').html(dateString);

    setTimeout(showTime, 1000);
});

function convertTimeValues(hour) {

    hour = (hour > 24) ? hour - 24 : hour;
    var ampm = (hour < 12) ? " AM" : " PM";

    hour = (hour > 12) ? hour - 12 : hour;
    hour = (hour == 0) ? 12 : hour;
    hour = hour + ampm;

    return hour;
}
