$(function() {
    $('#calendar').fullCalendar({
        googleCalendarApiKey: googleCalKey,
        events: {
            googleCalendarId: googleCalId
        },
        defaultView: 'agendaWeek',
        header: {
            left: '',
            center: 'title',
            right: ''
        },
        nowIndicator: true,
        height: 180,
        slotDuration: '01:00:00',
        minTime: '07:00:00'
    });
    // $('#calendar').css('background-color', 'black');
});
