const getAsyncCoffee = (hasBeans) => {
    return new Promise((resolve, reject) => {
        if (hasBeans) {
            resolve("☕️")
        } else {
            reject("Kaffebönorna är slut 😭🫘")
        }
    }, 2000)
}

const addMilk = (coffee) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(coffee + "🥛")
        }, 1000)
    })
}

const drinkCoffee = (coffee) => {
    console.log("Mums, dags att dricka:", coffee)
}

//! === 1. .then ===
const orderCoffee = () => {
    getAsyncCoffee(true)
        .then(drinkCoffee)
}

//! === 2. .catch ===
const orderCoffeeMaybe = () => {
    getAsyncCoffee(true)
        .then(drinkCoffee)
        .catch((error) => {
            console.log("Inget kaffe ☕️🛑", error)
        })
        .finally(() => { console.log("Kaffepausen är slut!") })
}

//! === 3. coffee with milk
const orderCoffeeWithMilk = () => {
    getAsyncCoffee(true)
        .then(addMilk)
        .then(drinkCoffee)
}

//orderCoffee()
//orderCoffeeMaybe()
orderCoffeeWithMilk()
