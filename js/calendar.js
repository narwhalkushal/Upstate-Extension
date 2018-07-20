$(function() {

    var currDate = new Date();
    day = currDate.getDay();

    $('#calendar').fullCalendar({
        googleCalendarApiKey: googleCalKey,
        events: {
            googleCalendarId: googleCalId
        },
        defaultView: 'basicWeek',
        timezone: 'local',
        allDaySlot: false,
        eventColor: 'white',
        firstDay: day - 3,
        eventColor: '#D10F39',
        eventMouseover: function(calEvent, jsEvent) {
            var tooltip = '<div class="tooltipevent"> <span class="event-title">' + calEvent.title + '</span><br>Location: ' + calEvent.location + '<br>Time: ' + timeString(calEvent.start, calEvent.end) + '</div>';
            var $tooltip = $(tooltip).appendTo('body');
            $(this).css('background-color', 'rgba(39,110,241)');
            $(this).css('transition', '0s');
            $(this).css('border', '0.5px solid white');
            $(this).css('color', 'white');
            $(this).mouseover(function(e) {
                $(this).css('z-index', 10000);
                // $tooltip.fadeIn('100', 'easein');
                // $tooltip.fadeTo('10', 1.9);
            }).mousemove(function(e) {
                $tooltip.css('top', e.pageY + 20);
                $tooltip.css('left', e.pageX - $('.tooltipevent').outerWidth() / 2);
            });
        },
        eventMouseout: function(calEvent, jsEvent) {
            $(this).css('z-index', 8);
            $('.tooltipevent').remove();
            $(this).css('background-color', '#D10F39');
            $(this).css('transition', '0s');
            $(this).css('border', '0.5px solid white')
            $(this).css('color', 'rgba(27, 35, 78)');
        },
        eventClick: function(event) {
            if (event.url) {
                return false;
            }
        },
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'basicWeek,agendaThreeDay'
        },
        buttonText: {
            today: 'Jump to Today',
            agendaDay: 'Agenda View',
            basicWeek: 'Week View'
        },
        nowIndicator: true,
        height: 180,
        slotDuration: '01:00:00',
        scrollTime: startTime(),
        displayEventTime: false,
        views: {
            agendaThreeDay: {
                type: 'agenda',
                dayCount: 3,
            }
        }
    });
});

function startTime() {
    var date = new Date();
    var hour = date.getHours(); // 0 - 23
    hour = hour - 3;
    hour = (hour < 0) ? hour + 24 : hour;
    var min = date.getMinutes();
    // min = min - 30;

    if (min < 0) {
        min = min + 60;
        hour = hour - 1;
    }
    var sec = date.getSeconds();

    return hour + ':' + min + ':' + sec
}

function timeString(startTime, endTime) {
    startTime = convertTime(startTime);
    endTime = convertTime(endTime);

    return startTime + ' - ' + endTime;
}

function convertTime(timeVal) {

    var startTime = new Date(timeVal);

    var hour = startTime.getHours();
    var ampm = (hour < 12) ? " AM" : " PM";
    var min = startTime.getMinutes();
    min = (min < 10) ? "0" + min : min;

    hour = (hour > 12) ? hour - 12 : hour;
    hour = (hour == 0) ? 12 : hour;

    return hour + ':' + min + ampm;
}
