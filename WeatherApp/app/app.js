//const { default: swal } = require("sweetalert");

//Weather API
const api = {
  key: "415beec5d795bb735fc4cb89d6788cdc",
  base: "https://api.openweathermap.org/data/2.5/",
};

let setQuery = () => {
  $("#input").change(function () {
    (e) => setQuery(e.target.value);
  });
};

let weather = () => {};

//DATES
let dt = new Date();
let time = dt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
let date = dt.getMonth() + 1 + "/" + dt.getDate();
let day1 = dt.getMonth() + 1 + "/" + (dt.getDate() + 1);
let day2 = dt.getMonth() + 1 + "/" + (dt.getDate() + 2);
let day3 = dt.getMonth() + 1 + "/" + (dt.getDate() + 3);
let day4 = dt.getMonth() + 1 + "/" + (dt.getDate() + 4);
let day5 = dt.getMonth() + 1 + "/" + (dt.getDate() + 5);

let weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let weekday2 = weekday[dt.getDay() + 1];
let weekday3 = weekday[dt.getDay() + 2];

//Doesn't let you add another day?
let weekday4 = weekday[dt.getDay() + 3];
let weekday5 = weekday[dt.getDay() + 4];
let weekday6 = weekday[dt.getDay() + 5];

//Allows user to search for a location/zip
function search() {
  $("#input").on("keypress", function (e) {
    let query = $("input").val();
    if (e.key === "Enter" || e.keyCode === 13) {
      //Hides Weather until user inputs
      document.getElementById("current").style.display = "block";
      document.getElementById("days").style.display = "block";
      document.getElementById("head").style.height = "385px";
      // document.getElementById("footer").style.display = "block";

      //Recieves JSON data from api open weather
      fetch(`${api.base}forecast?q=${query}&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          let setWeather = result;
          console.log(result);

          //////CURRENT WEATHER///////
          //weather = weather.main.temp;
          $("#location").html(setWeather.city.name);
          $("#location2").html(setWeather.city.name);
          $("#currentTime").html(time);

          //Displays the temperature
          $("#temp").html(
            Math.round((setWeather.list[0].main.temp - 273.15) * 1.8 + 32) +
              "°" +
              ` <span>F</span>`
          );

          //Displays the 'realfeel'
          $(".realfeel").html(
            "RealFeel® " +
              Math.round(
                (setWeather.list[0].main.feels_like - 273.15) * 1.8 + 32
              ) +
              "°"
          );

          //Displays the 'realfeel' shade w/o words
          $("#shade").html(
            Math.round(
              (setWeather.list[0].main.feels_like - 273.15) * 1.8 + 32 - 5
            ) + "°"
          );

          //Displays the humidity
          $("#humidity").html(setWeather.list[0].main.humidity + "%");

          //Displays wind speed
          $("#wind").html(setWeather.list[0].wind.speed + " mph");

          //Displays description of weather
          $("#description").html(setWeather.list[0].weather[0].description);

          //displays weather icon
          let icon = setWeather.list[0].weather[0].icon;

          let img = $(".weather-icon").html(
            `http://openweathermap.org/img/wn/${icon}@2x.png`
          );

          $(".weather__icon").html(
            `<img height="100px"
             src="http://openweathermap.org/img/wn/${icon}@2x.png" />`
          );

          /////FORECAST FOR DAY 1 /////
          //Displays the day name
          $("#weekday2").html(weekday2);

          //Displays the Date
          $(".day-date").html(day1);

          //Displays the Icon
          let icon2 = setWeather.list[1].weather[0].icon;
          $("#weather__icon2").html(
            `<img height="80px"
             src="http://openweathermap.org/img/wn/${icon2}@2x.png" />`
          );

          //Displays the High & low temp
          $("#temp-2").html(
            "<h1>" +
              Math.round(
                (setWeather.list[1].main.temp_max - 273.15) * 1.8 + 32
              ) +
              "°<span>/" +
              Math.round(
                (setWeather.list[1].main.temp_min - 273.15) * 1.8 + 32 - 5
              ) +
              "°</span></h1>"
          );

          //Displays the real feel
          $("#real-feel-2").html(
            "<h4> RealFeel® " +
              Math.round(
                (setWeather.list[1].main.feels_like - 273.15) * 1.8 + 32 - 5
              ) +
              "°</h4>"
          );

          //Displays description of weather
          $("#description-2").html(setWeather.list[1].weather[0].description);

          /////FORECAST FOR DAY 2 /////
          //Displays the day name
          $("#weekday3").html(weekday3);

          //Displays the Date
          $(".day-date2").html(day2);

          //Displays the Icon
          let icon3 = setWeather.list[2].weather[0].icon;
          $("#weather__icon3").html(
            `<img height="80px"
             src="http://openweathermap.org/img/wn/${icon3}@2x.png" />`
          );

          //Displays the High & low temp
          $("#temp-3").html(
            "<h1>" +
              Math.round(
                (setWeather.list[2].main.temp_max - 273.15) * 1.8 + 32
              ) +
              "°<span>/" +
              Math.round(
                (setWeather.list[2].main.temp_min - 273.15) * 1.8 + 32 - 5
              ) +
              "°</span></h1>"
          );

          //Displays the real feel
          $("#real-feel-3").html(
            "<h4> RealFeel® " +
              Math.round(
                (setWeather.list[2].main.feels_like - 273.15) * 1.8 + 32 - 5
              ) +
              "°</h4>"
          );

          //Displays description of weather
          $("#description-3").html(setWeather.list[2].weather[0].description);

          /////FORECAST FOR DAY 3 /////
          //Displays the day name
          $("#weekday4").html(weekday4);

          //Displays the Date
          $(".day-date3").html(day3);

          //Displays the Icon
          let icon4 = setWeather.list[3].weather[0].icon;
          $("#weather__icon4").html(
            `<img height="80px"
             src="http://openweathermap.org/img/wn/${icon4}@2x.png" />`
          );

          //Displays the High & low temp
          $("#temp-4").html(
            "<h1>" +
              Math.round(
                (setWeather.list[3].main.temp_max - 273.15) * 1.8 + 32
              ) +
              "°<span>/" +
              Math.round(
                (setWeather.list[3].main.temp_min - 273.15) * 1.8 + 32 - 5
              ) +
              "°</span></h1>"
          );

          //Displays the real feel
          $("#real-feel-4").html(
            "<h4> RealFeel® " +
              Math.round(
                (setWeather.list[3].main.feels_like - 273.15) * 1.8 + 32 - 5
              ) +
              "°</h4>"
          );

          //Displays description of weather
          $("#description-4").html(setWeather.list[3].weather[0].description);

          /////FORECAST FOR DAY 4 /////
          //Displays the day name
          $("#weekday5").html(weekday5);

          //Displays the Date
          $(".day-date4").html(day4);

          //Displays the Icon
          let icon5 = setWeather.list[4].weather[0].icon;
          $("#weather__icon5").html(
            `<img height="80px"
             src="http://openweathermap.org/img/wn/${icon5}@2x.png" />`
          );

          //Displays the High & low temp
          $("#temp-5").html(
            "<h1>" +
              Math.round(
                (setWeather.list[4].main.temp_max - 273.15) * 1.8 + 32
              ) +
              "°<span>/" +
              Math.round(
                (setWeather.list[4].main.temp_min - 273.15) * 1.8 + 32 - 5
              ) +
              "°</span></h1>"
          );

          //Displays the real feel
          $("#real-feel-5").html(
            "<h4> RealFeel® " +
              Math.round(
                (setWeather.list[4].main.feels_like - 273.15) * 1.8 + 32 - 5
              ) +
              "°</h4>"
          );

          //Displays description of weather
          $("#description-5").html(setWeather.list[4].weather[0].description);

          /////FORECAST FOR DAY 5 /////
          //Displays the day name
          $("#weekday6").html(weekday6);

          //Displays the Date
          $(".day-date5").html(day5);

          //Displays the Icon
          let icon6 = setWeather.list[5].weather[0].icon;
          $("#weather__icon6").html(
            `<img height="80px"
             src="http://openweathermap.org/img/wn/${icon6}@2x.png" />`
          );

          //Displays the High & low temp
          $("#temp-6").html(
            "<h1>" +
              Math.round(
                (setWeather.list[5].main.temp_max - 273.15) * 1.8 + 32
              ) +
              "°<span>/" +
              Math.round(
                (setWeather.list[5].main.temp_min - 273.15) * 1.8 + 32 - 5
              ) +
              "°</span></h1>"
          );

          //Displays the real feel
          $("#real-feel-6").html(
            "<h4> RealFeel® " +
              Math.round(
                (setWeather.list[5].main.feels_like - 273.15) * 1.8 + 32 - 5
              ) +
              "°</h4>"
          );

          //Displays description of weather
          $("#description-6").html(setWeather.list[5].weather[0].description);
        })
        .catch((err) => {
          document.getElementById("current").style.display = "none";
          document.getElementById("days").style.display = "none";
          document.getElementById("head").style.height = "100vh";
          console.log(err);
          swal(
            "Sorry, that didn't quite work. Try writing the name of your city or zip code again. Make sure that you are not using any special characters including commas, periods, and spaces."
          );
        });
    }
  });
}

function signUp() {
  var customerName = prompt("Please enter a username", "");
  if (customerName != null) {
    document.getElementById("signUp").innerHTML =
      "Welcome " + customerName + "!";

    document.getElementById("logIn").style.display = "none";
  }
}

function logIn() {
  var customerName = prompt("Please enter your username", "");
  if (customerName != null) {
    document.getElementById("signUp").innerHTML =
      "Welcome back " + customerName + "!";

    document.getElementById("logIn").style.display = "none";
  }
}

$(document).ready(function () {
  //console.log("hey");
  search();
});