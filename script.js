const apiKey = "06f605f08cf48c8516d84ad6069a1090";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const weatherObject = {
//   Clouds: "https://cdn-icons-png.flaticon.com/512/3222/3222807.png",
//   Clear: "https://cdn-icons-png.flaticon.com/512/7084/7084512.png",
//   Thunderstorm: "https://cdn-icons-png.flaticon.com/512/3104/3104612.png",
//   Drizzle: "https://cdn-icons-png.flaticon.com/512/4837/4837659.png",
//   Rain: "https://cdn-icons-png.flaticon.com/512/4724/4724091.png",
//   Snow: "https://cdn-icons-png.flaticon.com/512/6635/6635320.png",
// };

let cityText = document.querySelector(".city");
let humidityText = document.getElementById("humidityCount");
let windText = document.getElementById("windCount");
let tempText = document.getElementById("temperature");
let weatherImage = document.getElementById("weatherImg");

const searchBox = document.getElementById("userInput");
const searchBtn = document.getElementById("btn");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
  if (data.cod == "404") {
    cityText.innerHTML = "City Not Found";
    tempText.innerHTML = "NA";
    humidityText.innerHTML = "NA";
    windText.innerHTML = "NA";
    return;
  }
  tempText.innerHTML = `${data.main.temp}°C`;
  cityText.innerHTML = data.name;
  humidityText.innerHTML = `${data.main.humidity}%`;
  windText.innerHTML = `${Math.round(data.wind.speed)}km/h`;
  weatherImage.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  //   Changing the Weather Icon ---------------------------->

  // if (data.weather[0].main == "Clouds") {
  // }

  // if (data.weather[0].main == "Clear") {
  //   weatherImage.src =
  //     "https://cdn-icons-png.flaticon.com/512/7084/7084512.png";
  // }

  // if (data.weather[0].main == "Thunderstorm") {
  //   weatherImage.src =
  //     "https://cdn-icons-png.flaticon.com/512/3104/3104612.png";
  // }

  // if (data.weather[0].main == "Drizzle") {
  //   weatherImage.src =
  //     "https://cdn-icons-png.flaticon.com/512/4837/4837659.png";
  // }

  // if (data.weather[0].main == "Rain") {
  //   weatherImage.src =
  //     "https://cdn-icons-png.flaticon.com/512/4724/4724091.png";
  // }

  // if (data.weather[0].main == "Snow") {
  //   weatherImage.src =
  //     "https://cdn-icons-png.flaticon.com/512/6635/6635320.png";
  // }

  //   Changing the Weather Icon ---------------------------->
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
