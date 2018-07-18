$(function() {
    $('#calendar').fullCalendar({
        googleCalendarApiKey: googleCalKey,
        events: {
            googleCalendarId: '0g5lutmp776hpisbovsd7thojo42o924@import.calendar.google.com'
        },
        defaultView: 'basicWeek',
        header: {
            left: '',
            center: 'title',
            right: ''
        },
        height: 180,
    });
    // $('#calendar').css('background-color', 'black');
});
