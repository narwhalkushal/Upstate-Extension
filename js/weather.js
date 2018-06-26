$(document).ready(function() {
    $('#weather-desc main').html('Weather Data Loading...');
    $.ajax({
      url: `https://api.openweathermap.org/data/2.5/forecast?q=Syracuse&appid=11adcfe70b89b2df10b3fcb71b8f2a89`,
      type: 'GET',
      data: {
      format: 'json'
    },

      success: function(response) {

        var tempVals = tempData(response);
        $('#temp').html(tempVals[0]);
        $('#min-temp').html(tempVals[1]);
        $('#max-temp').html(tempVals[2]);
        $('#weather-desc').html(response.list[0].weather[0].description);

        var weatherID = response.list[0].weather[0].id;
        var dayOrNight = response.list[0].weather[0].icon[2];

        dayOrNight = (dayOrNight == 'd') ? "day": "night";

        var iconString = '<i class="wi wi-owm-'+ dayOrNight + '-' + weatherID + ' icon-color"></i>';
        $(".weather-icon").html(iconString);

        var currTime = new Date();

        for (i = 1; i < 5; i++) {
          // getWeatherData(i, response);
        }
      },
      error: function() {
        $('.errors').text("There was an error processing your request. Please try again later.")
      }
    });
  });
// });

function tempData(jsonFile) {
  var temp = Math.round((jsonFile.list[0].main.temp - 273)*9/5 + 32) + "&deg" + "F";
  var minTemp = Math.round((jsonFile.list[0].main.temp_min - 273)*9/5 + 32) + "&deg" + "F";
  var maxTemp = Math.round((jsonFile.list[0].main.temp_max - 273)*9/5 + 32) + "&deg" + "F";

  return [temp, minTemp, maxTemp];
}

function getWeatherData(timepoint, response) {
  var tempValueString = '#temp-value-' + timepoint;
  var weatherDescString = '#weather-desc' + timepoint;
  var currTimeString = '#time-val' + timepoint;

  // var utc = currTime.getTime() + (utc.getTimezoneOffset()*60000);
  // var nd = new Date(utc + (360000*-4));
  // var currTime = response.list[0].dt_txt;
  // console.log(currTime);

  var temp = Math.round((response.list[timepoint].main.temp - 273)*9/5 + 32) + "&deg" + "F";
  var weatherID = response.list[timepoint].weather[0].id;
  var dayOrNight = response.list[timepoint].weather[0].icon[2];

  $(tempValueString).html(temp);
}
