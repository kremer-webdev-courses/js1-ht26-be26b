const brewBtn = document.getElementById("brew-btn")
const coffeeStatus = document.getElementById("coffee-status")

const getAsyncCoffee = (callback) => {
    setTimeout(() => {
        callback("☕️")
    }, 3000)
}

const renderCoffee = (coffee) => {
    coffeeStatus.textContent = `Ditt kaffe är färdigt ${coffee}`
}

brewBtn.addEventListener("click", () => {
    coffeeStatus.textContent = "Ditt kaffe håller på att bryggas ⏱️"

    getAsyncCoffee(renderCoffee)
})