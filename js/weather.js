$(document).ready(function() {

    ajaxWeather('Syracuse');

});

var startIndex = 0;
var lastIndex = 4;

function ajaxWeather(cityName) {

    var APIKey = '11adcfe70b89b2df10b3fcb71b8f2a89';
    var weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + APIKey;
    var forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&cnt=5' + '&appid=' + APIKey;

    console.log(weatherURL)
    console.log(forecastURL)

    $('#weather-desc').html('Weather Data Loading...');
    $.ajax({url: weatherURL,
        type: 'GET',
        data: {format: 'json'},
        success: function(response) {
            ajaxWeatherInterface(response);
        },
        error: function() {
            $('.errors').text("There was an error processing your request. Please try again later.")
        }
    });

    $.ajax({url: forecastURL,
        type: 'GET',
        data: {format: 'json'},
        success: function(response) {
            ajaxForecastInterface(response);
        },
        error: function() {
            $('.errors').text('Data not loaded.');
        }
    });
}

function ajaxWeatherInterface(jsonFile) {
    var weatherData = parseWeatherData(jsonFile);
    writeWeatherHTML(weatherData);
}
function ajaxForecastInterface(jsonFile) {
    var forecastData = parseWeatherData(jsonFile, 1);
    var hours = hoursValues(jsonFile);
    writeForecastHTML();
    fillForecastHTML(forecastData, hours);

}

function fillForecastHTML(forecastData, hours) {
    for (var index = startIndex; index < lastIndex; index++) {
        $('.weather-time.' + index).html(hours[index]);
        $('.temp.' + index).html(forecastData[0][index]);
        $('.weather-icon.' + index).html(forecastData[4][index]);
    }
    console.log(forecastData);
}

function parseWeatherData(jsonFile, flag) {

    var weatherID = [];
    var temp = [];
    var minTemp = [];
    var maxTemp = [];
    var weatherDesc = [];
    var dayOrNight = [];
    var j;
    var iconString = [];

    if (!flag) {
        temp = convertTempValue(jsonFile.main.temp);
        minTemp = convertTempValue(jsonFile.main.temp_min);
        maxTemp = convertTempValue(jsonFile.main.temp_max);
        weatherDesc = jsonFile.weather[0].description;
        dayOrNight = jsonFile.weather[0].icon[2];
        weatherID = jsonFile.weather[0].id;
        dayOrNight = (dayOrNight == 'd') ? 'day' : 'night';
        iconString = '<i class="wi wi-owm-'+ dayOrNight + '-' + weatherID + ' icon-color"></i>';

    } else {
        for (j = startIndex; j < lastIndex; j++) {
            temp[j] = convertTempValue(jsonFile.list[j].main.temp);
            minTemp[j] = convertTempValue(jsonFile.list[j].main.temp_min);
            maxTemp[j] = convertTempValue(jsonFile.list[j].main.temp_max);
            weatherDesc[j] = jsonFile.list[j].weather[0].description;
            dayOrNight[j] = jsonFile.list[j].weather[0].icon[2];
            dayOrNight[j] = (dayOrNight[j] == 'd') ? 'day' : 'night';
            weatherID[j] = jsonFile.list[j].weather[0].id;
            iconString[j] = '<i class="wi wi-owm-'+ dayOrNight[j] + '-' + weatherID[j] + ' icon-color"></i>';
        }
    }

    return [temp, minTemp, maxTemp, weatherDesc, iconString];
}

function writeForecastHTML() {

    var str = "<div class='row-distribution'>";

    for (index = startIndex; index < lastIndex; index++) {
        str = str + "<div class='column-distribution'>";
        str = str + "<div class='weather-time " + index + "'></div>";
        str = str + "<div class='temp " + index + "'></div>";
        str = str + "<div class='weather-icon " + index + "'></div>";
        str = str + "</div>";
    }
    str = str + "</div>";
    $('.forecast-data').append(str);

}

function writeWeatherHTML(weatherData) {

    $('#temp').html(weatherData[0]);
    $('#min-temp').html(weatherData[1]);
    $('#max-temp').html(weatherData[2]);
    $('#weather-desc').html(weatherData[3]);
    $('.weather-icon').html(weatherData[4]);
}

function convertTempValue(temp) {
    temp = Math.round((temp - 273)*9/5 + 32) + "&deg" + "F";
    return temp;
}


function hoursValues(jsonFile) {
    var dt = jsonFile.list[0].dt;
    var currTime = new Date(dt*1000);
    var h = [];

    var hStart = currTime.getHours();

    hStart = (currTime.getMinutes() >= 30) ? hStart + 1 : hStart;
    hStart = (hStart < 0) ? hStart + 24 : hStart;

    h[0] = convertTimeValues(hStart);
    h[1] = convertTimeValues(hStart + 3);
    h[2] = convertTimeValues(hStart + 6);
    h[3] = convertTimeValues(hStart + 9);

    return h;
}
