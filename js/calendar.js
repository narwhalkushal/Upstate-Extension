$(document).ready(function() {
    getCalendar();
});

function getCalendar() {

    var calendarURL = 'https://api.presence.io/upstate/v1/events';
    $.ajax({url: calendarURL,
        type: 'GET',
        data: {format: 'json'},
        success: function(response) {
            calendarInterface(response);
        },
        error: function() {
        }
    });
}

function calendarInterface(jsonCal) {

    console.log(jsonCal);

    firstEvent = jsonCal[0]
    console.log(firstEvent.apiId);

}
