$(document).ready(function() {

    var syracuseLatitude = 43.0403;
    var syracuseLongitude = -76.1390;
    ajaxWeather(syracuseLatitude, syracuseLongitude);

});

var startIndex = 0;
var lastIndex = 4;

function ajaxWeather(latitude, longitude) {

    var weatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=imperial' + '&appid=' + weatherApiKey;
    var forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&cnt=5&units=imperial' + '&appid=' + weatherApiKey;

    $('#weather-desc').html('Weather Data Loading...');
    $.ajax({url: weatherURL,
        type: 'GET',
        data: {format: 'json'},
        success: function(response) {
            ajaxWeatherInterface(response);
        },
        error: function() {
            $('.errors').text("There was an error processing your request. Please try again later.")
            $('.divider').text("");
        }
    });

    $.ajax({url: forecastURL,
        type: 'GET',
        data: {format: 'json'},
        success: function(response) {
            ajaxForecastInterface(response);
        },
        error: function() {
            // $('.errors').text('Data not loaded.');
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
        $('.forecast-time.' + index).html(hours[index]);
        $('.forecast-temp.' + index).html(forecastData[0][index]);
        $('.weather-icon-small.' + index).html(forecastData[4][index]);
    }
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
    var windDirec = [];
    var windSpeed = [];
    var sunrise = [];
    var sunset = [];
    var humidity = [];

    if (!flag) {
        temp = Math.round(jsonFile.main.temp) + "&degF";
        minTemp = Math.round(jsonFile.main.temp_min) + "&degF";
        maxTemp = Math.round(jsonFile.main.temp_max) + "&degF";
        weatherDesc = jsonFile.weather[0].description;
        dayOrNight = jsonFile.weather[0].icon[2];
        weatherID = jsonFile.weather[0].id;
        dayOrNight = (dayOrNight == 'd') ? 'day' : 'night';
        iconString = '<i class="wi wi-owm-'+ dayOrNight + '-' + weatherID + ' icon-color"></i>';
        windDirec = windDegreeMask(jsonFile.wind.deg);
        windSpeed = jsonFile.wind.speed;
        sunrise = sunTimes(jsonFile.sys.sunrise);
        sunset = sunTimes(jsonFile.sys.sunset);
        humidity = jsonFile.main.humidity;

    } else {
        for (j = startIndex; j < lastIndex; j++) {
            temp[j] = Math.round(jsonFile.list[j].main.temp) + "&degF";
            minTemp[j] = Math.round(jsonFile.list[j].main.temp_min) + "&degF";
            maxTemp[j] = Math.round(jsonFile.list[j].main.temp_max) + "&degF";
            weatherDesc[j] = jsonFile.list[j].weather[0].description;
            dayOrNight[j] = jsonFile.list[j].weather[0].icon[2];
            dayOrNight[j] = (dayOrNight[j] == 'd') ? 'day' : 'night';
            weatherID[j] = jsonFile.list[j].weather[0].id;
            iconString[j] = '<i class="wi wi-owm-'+ dayOrNight[j] + '-' + weatherID[j] + ' icon-color"></i>';
        }
    }

    return [temp, minTemp, maxTemp, weatherDesc, iconString, windDirec, windSpeed, sunrise, sunset, humidity];
}

function writeForecastHTML() {

    var str = "<div class='row-distribution'>";

    for (index = startIndex; index < lastIndex; index++) {
        str = str + "<div class='column-distribution style='height:100%''>";
        str = str + "<div class='forecast-time " + index + "'></div>";
        str = str + "<div class='weather-icon-small " + index + "'></div>";
        str = str + "<div class='forecast-temp " + index + "'></div>";
        str = str + "</div>";
    }
    str = str + "</div>";
    $('.forecast-data').append(str);
}

function writeWeatherHTML(weatherData) {

    $('#temp').html(weatherData[0]);
    $('.min-temp').html(weatherData[1]);
    $('.max-temp').html(weatherData[2]);
    $('#weather-desc').html(weatherData[3]);
    $('.weather-icon').html(weatherData[4]);
    $('.wind-data').html("Wind: " + Math.round(weatherData[6]) + " mph " + weatherData[5]);
    $('.sunrise').html(weatherData[7]);
    $('.sunset').html(weatherData[8]);
    $('.humidity').html("Humidity: " + weatherData[9] + "%");
}

function sunTimes(sunTime) {

    var time = new Date(sunTime*1000);
    var hour = time.getHours();
    var min = time.getMinutes();
    var ampm = (hour < 12) ? " AM" : " PM";
    hour = (hour > 12) ? hour - 12 : hour;
    hour = (hour == 0 ) ? 12 : hour;
    min = (min < 10) ? "0" + min : min;

    var timeVal = hour + ":" + min + ampm;

    return timeVal;
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

function windDegreeMask(degree) {

    var direc;
    switch(true) {
        case (degree > 348.75 && degree <= 11.25):
            direc = "N";
            break;
        case (degree > 11.25 && degree <= 33.75):
            direc = "NNE";
            break;
        case (degree > 33.75 && degree <= 56.25):
            direc = "NE";
            break;
        case (degree > 56.25 && degree <= 78.75):
            direc = "ENE";
            break;
        case (degree > 78.75 && degree <= 101.25):
            direc = "E";
            break;
        case (degree > 111.25 && degree <= 123.75):
            direc = "ESE";
            break;
        case (degree > 123.75 && degree <= 146.25):
            direc = "SE";
            break;
        case (degree > 146.25 && degree <= 168.75):
            direc = "SSE";
            break;
        case (degree > 168.75 && degree <= 191.25):
            direc = "S";
            break;
        case (degree > 191.25 && degree <= 213.75):
            direc = "SSW";
            break;
        case (degree > 213.75 && degree <= 236.75):
            direc = "SW";
            break;
        case (degree > 236.75 && degree <= 258.75):
            direc = "WSW";
            break;
        case (degree > 258.75 && degree <= 281.25):
            direc = "W";
            break;
        case (degree > 281.25 && degree <= 303.75):
            direc = "WNW";
            break;
        case (degree > 303.75 && degree <= 326.25):
            direc = "NW";
            break;
        case (degree > 326.25 && degree <= 348.75):
            direc = "NNW";
            break;
        default:
            direc = "";

    }
    return direc;

}
