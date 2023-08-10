const apiKey = "161618cfd03dff7f6c502f5611dd4a79";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        alert("Invalid city name");
        // document.querySelector(".error").style.display ="block"
        document.querySelector(".weather").style.display = "none"
    }

    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
        document.querySelector(".card").style.background = "url(images/cloudsky.jpg)";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
        // document.querySelector(".card").style.background = "url(images/clearsky.png)";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
        //  document.querySelector(".card").style.background = "url(images/rainsky.jpg)";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/Mist.png"
        // document.querySelector(".card").style.background = "url(images/mistsky.jpg)";
    }
    else if (data.weather[0].main == "Drizzel") {
        weatherIcon.src = "images/drizzle.png"
        // document.querySelector(".card").style.background = "url(images/drizzlesky.jpg)";
    }

    document.querySelector(".weather").style.display = "contents";

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
