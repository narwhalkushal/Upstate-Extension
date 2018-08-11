$(function() {

    var currDate = new Date();
    day = currDate.getDay();

    $('#calendar').fullCalendar({
        googleCalendarApiKey: googleCalKey,
        events: {
            googleCalendarId: googleCalId
        },
        defaultView: 'agendaDay',
        timezone: 'local',
        allDaySlot: false,
        eventColor: 'white',
        firstDay: day - 3,
        eventColor: '#D10F39',
        eventMouseover: function(calEvent, jsEvent) {
            var tooltip = '<div class="tooltipevent"> <span class="event-title">' + calEvent.title + '</span><br>Location: ' + calEvent.location + '<br>Time: ' + timeString(calEvent.start, calEvent.end) + '</div>';
            var $tooltip = $(tooltip).appendTo('body');
            var wid = $('.tooltipevent').outerWidth();
            $(this).css('background-color', 'rgba(39,110,241)');
            $(this).css('transition', '0s');
            $(this).css('border', '0.5px solid white');
            $(this).css('color', 'white');
            $(this).mouseover(function(e) {
                $(this).css('z-index', 10000);
            }).mousemove(function(e) {
                var rightOffset = ($(window).width() - ($(this).offset().left + $(this).outerWidth()));
                var calendarOffset = ($(window).width() - ($('.calendar-container').offset().left + $('.calendar-container').outerWidth()));
                if ($(this).offset().left < wid/2) {
                    $tooltip.css('top', e.pageY + 20)
                    $tooltip.css('left', e.pageX);
                } else if (rightOffset <= wid/2) {
                    $tooltip.css('top', e.pageY + 20)
                    $tooltip.css('left', e.pageX - wid);
                    // $tooltip.css('top', e.pageY + 50);
                    // $tooltip.css('right', e.PageX - $(this).outerWidth());
                } else {
                    $tooltip.css('top', e.pageY + 20);
                    $tooltip.css('left', e.pageX - wid / 2);
                }
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
            left: 'prev',
            center: 'title',
            right: 'next'
        },
        buttonText: {
            today: 'Jump to Today',
            agendaDay: 'Agenda View',
            basicWeek: 'Week View',
            agendaThreeDay: 'Hourly View',
            basicFourWeek: 'Month View'
        },
        eventLimit: 3,
        height: $('.left-column').outerHeight() - elementSpacing,
        nowIndicator: true,
        // height: 'parent',
        slotDuration: '01:00:00',
        scrollTime: startTime(),
        // displayEventTime: false,
        views: {
            basicFourWeek: {
                type: 'basic',
                duration: {
                    weeks: 4
                }
            }
        }
    });
});

function startTime() {
    var date = new Date();
    var hour = date.getHours(); // 0 - 23
    hour = (hour < 0) ? hour + 24 : hour;
    var min = date.getMinutes();
    // min = min - 30;

    if (min < 0) {
        min = min + 60;
        hour = hour - 1;
    }
    var sec = date.getSeconds();
    // hour = hour - 5;
    // hour = (hour < 0) ? 0 : hour + 12;
    console.log(hour);

    return (hour - 5) + ':' + min + ':' + sec
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
