$(document).ready(function() {
    $('#weather-desc main').html('Weather Data Loading...');
    $.ajax({
      url: `https://api.openweathermap.org/data/2.5/forecast?q=Syracuse&appid=11adcfe70b89b2df10b3fcb71b8f2a89`,
      type: 'GET',
      data: {
      format: 'json'
    },

      success: function(response) {
        var tempString = Math.round((response.list[0].main.temp - 273)*9/5 + 32) + "&deg" + "F";
        $('#temp-value').html(tempString);
        $('#weather-desc').html(response.list[0].weather[0].description);

        var weatherID = response.list[0].weather[0].id;
        var dayOrNight = response.list[0].weather[0].icon[2];

        dayOrNight = (dayOrNight == 'd') ? "day": "night";

        var iconString = '<i class="wi wi-owm-'+ dayOrNight + '-' + weatherID + '"></i>';
        $(".weather-icon").html(iconString);
      },
      error: function() {
        $('.errors').text("There was an error processing your request. Please try again later.")
      }
    });
  });
// });

function getWeatherData(timepoint) {

}
