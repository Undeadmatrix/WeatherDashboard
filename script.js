// fde075d2791a3bc0bde48cb996c8fd88 api key
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=fde075d2791a3bc0bde48cb996c8fd88 url

var coordLat;
var coordLon;
function getCurrentWeatherData(city)
{
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=fde075d2791a3bc0bde48cb996c8fd88";
    //console.log(queryUrl);
    $.ajax({
        url: queryUrl,
        method: "GET"
      }).then(function(response) {
          //console.log(response);
          coordLat = response.coord.lat;
          coordLon = response.coord.lon;
          //console.log("lat: " + coordLat);
          //console.log("lon: " + coordLon);
         var iconcode = response.weather[0].icon;
         var iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png";
         //console.log("icon: " + iconurl);
          $("#cityName").html("<h1>" + response.name + " " + "(" + currentDate + ")" + "</h1>");
          $('#wicon').attr('src', iconurl);
          $("#cityInfo").append(
              "<p>" + "Temperature: " + response.main.temp + "\u00B0 F" + "</p>" + 
              "<p>" + "Humidity: " + response.main.humidity + "%" + "</p>" + 
              "<p>" + "Wind Speed: " + response.wind.speed + " MPH" + "</p>"
          );
          getUVIndex(coordLat, coordLon);
      });
}

function getUVIndex(coordLat, coordLon)
{
    var queryUrl = "https://api.openweathermap.org/data/2.5/uvi?appid=fde075d2791a3bc0bde48cb996c8fd88&lat=" + coordLat + "&lon=" + coordLon;
    //console.log(queryUrl);
    $.ajax({
        url: queryUrl,
        method: "GET"
      }).then(function(response) {
          //console.log("UV: " + response.value);
          var uvIndex = response.value;
          //console.log("getUV: " + uvIndex);
          var UVSevere;
          var UVModerate;
          var UVFavorable;
          var UVSelect;
          //console.log("UVSelect: " + UVSelect);
          $("#uvindexid").append("<span>" + "UV Index: " + "</span>");
          UVSevere = $('<span>').addClass("badge badge-danger");
          UVModerate = $('<span>').addClass("badge badge-warning");
          UVFavorable = $('<span>').addClass("badge badge-success");
          if(uvIndex < 3)
          {
              UVSelect = UVFavorable;
              UVSelect.text(uvIndex);
          }
          else if(uvIndex >= 3 && uvIndex < 8)
          {
            UVSelect = UVModerate;
            UVSelect.text(uvIndex);
          }
          else if(uvIndex >= 8)
          {
            UVSelect = UVSevere;
            UVSelect.text(uvIndex);
          }
          $("#uvindexid").append(UVSelect);
      });
}
//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}

function getFiveDayForecast(city)
{
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=fde075d2791a3bc0bde48cb996c8fd88"
    //console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        //console.log("5Day: " + response);
        for(var i = 1; i < 6; i++)
        {
            //console.log("i: " + i);
            if(i == 1)
            {
                var date1 = [];
                date1 = response.list[5].dt_txt.split(/[ -]/);
                var iconcode = response.list[5].weather[0].icon;
                var iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png";
                $("#forecastDay1").html(date1[1] + "/" + date1[2] + "/" + date1[0]);
                $("#clipArt1").attr('src', iconurl);
                $("#forecastInfo1").html("<p>" + "Temp: " + response.list[5].main.temp + "\u00B0 F" + "</p>" +
                "<p>" + "Humidity: " + response.list[5].main.humidity + "%" + "</p>");
            }
            else if(i == 2)
            {
                var date2 = [];
                date2 = response.list[13].dt_txt.split(/[ -]/);
                var iconcode = response.list[13].weather[0].icon;
                var iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png";
                $("#forecastDay2").html(date2[1] + "/" + date2[2] + "/" + date2[0]);
                $("#clipArt2").attr('src', iconurl);
                $("#forecastInfo2").html("<p>" + "Temp: " + response.list[13].main.temp + "\u00B0 F" + "</p>" +
                "<p>" + "Humidity: " + response.list[13].main.humidity + "%" + "</p>");
            }
            else if(i == 3)
            {
                var date3 = [];
                date3 = response.list[21].dt_txt.split(/[ -]/);
                var iconcode = response.list[21].weather[0].icon;
                var iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png";
                $("#forecastDay3").html(date3[1] + "/" + date3[2] + "/" + date3[0]);
                $("#clipArt3").attr('src', iconurl);
                $("#forecastInfo3").html("<p>" + "Temp: " + response.list[21].main.temp + "\u00B0 F" + "</p>" +
                "<p>" + "Humidity: " + response.list[21].main.humidity + "%" + "</p>");
            }
            else if(i == 4)
            {
                var date4 = [];
                date4 = response.list[29].dt_txt.split(/[ -]/);
                var iconcode = response.list[29].weather[0].icon;
                var iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png";
                $("#forecastDay4").html(date4[1] + "/" + date4[2] + "/" + date4[0]);
                $("#clipArt4").attr('src', iconurl);
                $("#forecastInfo4").html("<p>" + "Temp: " + response.list[29].main.temp + "\u00B0 F" + "</p>" +
                "<p>" + "Humidity: " + response.list[29].main.humidity + "%" + "</p>");
            }
            else if(i == 5)
            {
                var date5 = [];
                date5 = response.list[37].dt_txt.split(/[ -]/);
                var iconcode = response.list[37].weather[0].icon;
                var iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png";
                $("#forecastDay5").html(date5[1] + "/" + date5[2] + "/" + date5[0]);
                $("#clipArt5").attr('src', iconurl);
                $("#forecastInfo5").html("<p>" + "Temp: " + response.list[37].main.temp + "\u00B0 F" + "</p>" +
                "<p>" + "Humidity: " + response.list[37].main.humidity + "%" + "</p>");
            }
        }
    });
}

function getLastSearched()
{
    var lastItem = localStorage.getItem("lastSearched");
    if(lastItem == null)
    {
        return;
    }
    else
    {
        getCurrentWeatherData(lastItem);
        getFiveDayForecast(lastItem);
    }
}

var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();

var currentDate = (month<10 ? '0' : '') + month + '/' + (day<10 ? '0' : '') + day + '/' + d.getFullYear();

window.addEventListener('storage', function(event) {
    console.log('The value for ' + event.key + ' was changed from' + event.oldValue + ' to ' + event.newValue);
}, false);

//console.log(currentDate);
$(window).on("load", getLastSearched());

$("#cityBtn").on("click", function(){
    event.preventDefault();
    $("#cityInfo").empty();
    $("#uvindexid").empty();
    var userInput = $("#userInput").val();
    console.log(userInput);
    getCurrentWeatherData(userInput);
    getFiveDayForecast(userInput);
    localStorage.setItem("lastSearched", userInput);
    $('.list-group').append("<button type='button' id='historyElement' data-toggle='list' class='list-group-item list-group-item-action'>"+ userInput +" </button>");
});
var storeValue = [];
$(".list-group-item").click(function(){
    StoreValue = []; //clear array
    StoreValue.push($(this).text()); // add text to array
});
console.log(storeValue.length);
$("#historyBtn").on("click", function(){
    event.preventDefault();
    $("#cityInfo").empty();
    $("#uvindexid").empty();
    var userInput = $(".active").text();
    console.log(userInput);
    getCurrentWeatherData(userInput);
    getFiveDayForecast(userInput);
    localStorage.setItem("lastSearched", userInput);
});