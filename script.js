// fde075d2791a3bc0bde48cb996c8fd88 api key
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=fde075d2791a3bc0bde48cb996c8fd88 url

function getCurrentWeatherData(city)
{
    var queryArt = "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=fde075d2791a3bc0bde48cb996c8fd88";
    $.ajax({
        url: queryArt,
        method: "GET"
      }).then(function(response) {
          console.log(response);
      });
}

$("#cityBtn").on("click", function(){
    event.preventDefault();
    getCurrentWeatherData();
});
