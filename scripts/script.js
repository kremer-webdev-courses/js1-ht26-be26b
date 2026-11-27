import API_KEY from "./config.js"

const weatherForm = document.getElementById("weather-form")
const cityInput = document.getElementById("city-input")

const API_URL = "https://api.openweathermap.org/data/2.5/weather"

const getCurrentWeather = async (city) => {
    const response = await fetch(`${API_URL}?q=${city}&units=metric&lang=sv&appid=${API_KEY}`)

    if (!response.ok) {
        throw new Error(`Kunde inte hämta väderdata för ${city}`, response.status)
    }

    const currentWeather = await response.json()

    return currentWeather
}

weatherForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const city = cityInput.value.trim()

    const currentWeather = await getCurrentWeather(city)

    console.log(currentWeather)
})