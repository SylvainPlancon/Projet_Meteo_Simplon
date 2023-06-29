let apikey = "59d4aba2d0f03c5f5ec6ad4b2078304f" // variable clef API 
let weather = {                                 // variable meteo
            fetchWeather : function (city) {    // fonction d'appel de l'API pour obtenir les donnees meteo
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + apikey)
        .then((Response) => Response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {   // recuperation des donnees meteo, element par element
        const { name } = data   
        const { icon, description } = data.weather[0]
        const { temp, humidity } = data.main
        const { speed } = data.wind
        document.querySelector(".city").innerText = "Weather in " + name             //interpretation des donnees meteo et envois au fichier HTML
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".description").innerText = description
        document.querySelector(".temp").innerText = temp + "°C"
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%"
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h"
        document.querySelector(".weather").classList.remove("loading")
    },
}
fetch("./conf.json")                //recuperation de la ville depuis le dossier conf.json
    .then((u) => u.json())
    .then((json) => weather.fetchWeather(json.city))
setInterval(function () {            //rappel a intervalle d'une heure pour mise a jour des donnees meteo
    fetch("./conf.json")
    }, 360000)
      
