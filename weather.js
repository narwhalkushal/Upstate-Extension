$(document).ready(function() {
    $.ajax({
      url: `https://api.openweathermap.org/data/2.5/weather?q=Syracuse&appid=11adcfe70b89b2df10b3fcb71b8f2a89`,
      type: 'GET',
      data: {
      format: 'json'
    },
      success: function(response) {
        var tempString = Math.round((response.main.temp - 273)*9/5 + 32) + "&deg" + "F";
        document.getElementById("showTemp").innerHTML = tempString;
        document.getElementById("showDesc").innerHTML = response.weather[0].description;
        var iconcode = response.weather[0].icon;
        var iconString = '<i class="owf owf-5x owf-' + response.weather[0].id + '-' + response.weather[0].icon[2]+'"></i>';
        $(".showWeatherIcon").html(iconString);
      },
      error: function() {
        $('.errors').text("There was an error processing your request. Please try again later.")
      }
    });
  });
// });
