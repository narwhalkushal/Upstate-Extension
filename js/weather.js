$(document).ready(function() {

    var cityName = 'Syracuse';
    var weatherJSON = ajaxWeather(cityName);
    // var weatherData = parseWeatherData(weatherJSON);
    // writeHTML(weatherData);
});

function ajaxInterface(jsonFile) {
    var weatherData = parseWeatherData(jsonFile, 0);
    writeHTML(weatherData);
}

function writeHTML(weatherData) {
    $('#weather-desc main').html('Weather Data Loading...');

    $('#temp').html(weatherData[0]);
    $('#min-temp').html(weatherData[1]);
    $('#max-temp').html(weatherData[2]);
    $('#weather-desc').html(weatherData[3]);
    $('.weather-icon').html(weatherData[4]);
}

function ajaxWeather(cityName) {

    var APIKey = '11adcfe70b89b2df10b3fcb71b8f2a89';
    var searchURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + APIKey;
    var weatherJSON;
    $.ajax({url: searchURL,
        type: 'GET',
        data: {format: 'json'},

        success: function(response) {
            ajaxInterface(response);
        },
        error: function() {
            $('.errors').text("There was an error processing your request. Please try again later.")
        }
    });
}

function parseWeatherData(jsonFile, index) {

  var temp = convertTempValue(jsonFile.list[index].main.temp);
  var minTemp = convertTempValue(jsonFile.list[index].main.temp_min);
  var maxTemp = convertTempValue(jsonFile.list[index].main.temp_max);
  var weatherDesc = jsonFile.list[index].weather[0].description
  var dayOrNight = jsonFile.list[index].weather[0].icon[2];
  var weatherID = jsonFile.list[index].weather[0].id;

  dayOrNight = (dayOrNight == 'd') ? 'day' : 'night';

  var iconString = '<i class="wi wi-owm-'+ dayOrNight + '-' + weatherID + ' icon-color"></i>';

  return [temp, minTemp, maxTemp, weatherDesc, iconString];
}

function convertTempValue(temp) {
  temp = Math.round((temp - 273)*9/5 + 32) + "&deg" + "F";
  return temp;
}
