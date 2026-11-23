const orderBtn = document.getElementById("order-btn")
const coffeeStatus = document.getElementById("coffee-status")

const getAsyncCoffee = (hasBeans) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (hasBeans) {
                resolve("☕️")
            } else {
                reject("Slut på bönor 🫘😭")
            }
        }, 2000)
    })
}

const renderCoffee = (coffee) => {
    coffeeStatus.textContent = coffee
}

orderBtn.addEventListener("click", async () => {

    coffeeStatus.textContent = "⏱️ Väntar på kaffet..."

    try {
        const coffee = await getAsyncCoffee(false)
        renderCoffee(coffee)
    } catch (error) {
        coffeeStatus.textContent = `Det blev inget kaffe ${error}`
    }
})