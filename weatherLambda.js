const request = require('request');

// check out https://developers.hubspot.com/docs/methods/bots/running-code-snippets for docs on what the bots API gives you and expects in return
// check out https://www.metaweather.com/api/ for docs on the underlying weather API we are using.

exports.main = (event, callback) => {
    // Pull the location the user set from a previous message
    var location = event.session.properties.CONTACT.city.value.trim();

    request('https://www.metaweather.com/api/location/search/?query=' + encodeURI(location), function (error, response, body) {
        // The first request takes the city name and searches the API for the correct location id. The response is an array of potential matches. We default to the firs item in the array.
        var probableLocation = JSON.parse(body)[0].woeid

        // Given the location, let's fetch the actual weather data
        request('https://www.metaweather.com/api/location/' + encodeURI(probableLocation), function (error2, response2, body2) {
            callback({
                "botMessage": parseResponseBasedOnInput(event, body2),
                "responseExpected": false
            })
        });
    });
};

function parseResponseBasedOnInput(event, responseBody) {
    var option = event.userMessage.message;
    var responseObject = JSON.parse(responseBody);

    if (option == "Current Temprature") {
        return "The current temprature is " + convertToFarenheit(responseObject.consolidated_weather[0].the_temp) + "F";
    } else if (option == "Humidity") {
        return "The current humidity is " + responseObject.consolidated_weather[0].humidity + "%";
    } else if (option == "Wind Speed") {
        return "The current wind speed is " + responseObject.consolidated_weather[0].wind_speed + "mph";
    } else if (option == "Visibility") {
        return "The current visibility is " + responseObject.consolidated_weather[0].visibility + " miles";
    }
}

function convertToFarenheit(temprature) {
    return ((temprature * 1.8) + 32).toFixed(2);
}
