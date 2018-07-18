$(function() {
  $('#calendar').fullCalendar({
    googleCalendarApiKey: googleCalKey,
    events: {
      googleCalendarId: '0g5lutmp776hpisbovsd7thojo42o924@import.calendar.google.com'
  },
  defaultView: 'basicWeek',
  header: {
  left:   'title',
  center: '',
  right:  'today prev,next'
},
height: 300,

  });
  // $('#calendar').css('background-color', 'black');
});
