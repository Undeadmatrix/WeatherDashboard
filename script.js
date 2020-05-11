// fde075d2791a3bc0bde48cb996c8fd88 api key
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=fde075d2791a3bc0bde48cb996c8fd88 url

var coordLat = 0;
var coordLon = 0;
function getCurrentWeatherData(city)
{
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=fde075d2791a3bc0bde48cb996c8fd88";
    console.log(queryUrl);
    $.ajax({
        url: queryUrl,
        method: "GET"
      }).then(function(response) {
          console.log(response);
          coordLat = response.coord.lat;
          coordLon = response.coord.lon;
          //console.log("lat: " + coordLat);
          //console.log("lon: " + coordLon);
          $("#cityName").html("<h1>" + response.name + " " + "(" + currentDate + ")" + "</h1>");
          $("#cityInfo").html(
              "<p>" + "Temperature: " + response.main.temp + "\u00B0 F" + "</p>" + 
              "<p>" + "Humidity: " + response.main.humidity + "%" + "</p>" + 
              "<p>" + "Wind Speed: " + response.wind.speed + " MPH"
          );
      });
}

console.log("lat: " + coordLat);
console.log("lon: " + coordLon);
/*
function getUVIndex(city)
{
    var queryUrl = "https://api.openweathermap.org/data/2.5/uvi?appid=fde075d2791a3bc0bde48cb996c8fd88&lat=" + coordLat + "&lon=" + coordLon;
    console.log(queryUrl);
    $.ajax({
        url: queryUrl,
        method: "GET"
      }).then(function(response) {
          coordLon = 
          console.log("UV: " + response);
      });
}
*/

var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();

var currentDate = (month<10 ? '0' : '') + month + '/' + (day<10 ? '0' : '') + day + '/' + d.getFullYear();

console.log(currentDate);

$("#cityBtn").on("click", function(){
    event.preventDefault();
    var userInput = $("#userInput").val();
    console.log(userInput);
    getCurrentWeatherData(userInput);
    getUVIndex(userInput);
});
