$(document).ready(function() {

    var syracuseLatitude = 43.0403;
    var syracuseLongitude = -76.1390;
    ajaxWeather(syracuseLatitude, syracuseLongitude);

});

var startIndex = 0;
var lastIndex = 4;

function ajaxWeather(latitude, longitude) {

    var APIKey = '11adcfe70b89b2df10b3fcb71b8f2a89';
    var weatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=imperial' + '&appid=' + APIKey;
    var forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&cnt=5&units=imperial' + '&appid=' + APIKey;

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
            $('.divider').text("");
        }
    });

    // $.ajax({url: forecastURL,
    //     type: 'GET',
    //     data: {format: 'json'},
    //     success: function(response) {
    //         ajaxForecastInterface(response);
    //     },
    //     error: function() {
    //         // $('.errors').text('Data not loaded.');
    //     }
    // });
}

function ajaxWeatherInterface(jsonFile) {
    var weatherData = parseWeatherData(jsonFile, 0, 1);
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
        $('.forecast-temp.' + index).html(forecastData[0][index]);
        $('.weather-icon-small.' + index).html(forecastData[4][index]);
    }
}

function parseWeatherData(jsonFile, start, finish) {

    var weatherArray = [];

    for (j = start; j < finish + 1; j++) {
        console.log('hey')
        weatherArray['temp'][j] = Math.round(jsonFile.main.temp) + "&deg" + "F";
        weatherArray['minTemp'][j] = Math.round(jsonFile.main.temp_min) + "&deg" + "F";
        weatherArray['maxTemp'][j] = Math.round(jsonFile.main.temp_max) + "&deg" + "F";
        weatherArray['weatherDesc'][j] = jsonFile.weather[0].description;
        weatherArray['dayOrNight'][j] = jsonFile.weather[0].icon[2];
        weatherArray['weatherID'][j] = jsonFile.weather[0].id;
        weatherArray['dayOrNight'][j] = (weatherArray['dayOrNight'] == 'd') ? 'day' : 'night';
        weatherArray['iconString'][j] = '<i class="wi wi-owm-'+ weatherArray['dayOrNight'] + '-' + weatherArray['weatherID'] + ' icon-color"></i>';
        weatherArray['windDirec'][j] = windDegreeMask(jsonFile.wind.deg);
        weatherArray['windSpeed'][j] = jsonFile.wind.speed;
        console.log('yo')
    }

    return weatherArray;
}

function writeForecastHTML() {

    var str = "<div class='row-distribution'>";

    for (index = startIndex; index < lastIndex; index++) {
        str = str + "<div class='column-distribution style='height:100%''>";
        str = str + "<div class='weather-time " + index + "'></div>";
        str = str + "<div class='weather-icon-small " + index + "'></div>";
        str = str + "<div class='forecast-temp " + index + "'></div>";
        str = str + "</div>";
    }
    str = str + "</div>";
    $('.forecast-data').append(str);
}

function writeWeatherHTML(weatherArray) {

    $('#temp').html(weatherArray['temp']);
    $('.min-temp').html(weatherArray['minTemp']);
    $('.max-temp').html(weatherArray['maxTemp']);
    $('#weather-desc').html(weatherArray['weatherDesc']);
    $('.weather-icon').html(weatherArray['iconString']);
    $('.wind-direc').html("Wind: " + weatherArray['windSpeed'] + " " + weatherArray['windDirec']);
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
    console.log(degree)

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
    console.log(direc);
    return direc;

}
