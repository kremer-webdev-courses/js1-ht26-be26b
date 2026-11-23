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

const addMilk = (coffee) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(coffee + "🥛")
        }, 1000)
    })
}

const drinkCoffee = (coffee) => {
    console.log("Dags att drick kaffe", coffee)
}

//! === 1. await ===
const orderCoffee = async () => {
    const coffee = await getAsyncCoffee(true)
    drinkCoffee(coffee)
}

//! === 2. kedja med await ===
const orderCoffeeWithMilk = async () => {
    const coffee = await getAsyncCoffee(true)
    const coffeeWithMilk = await addMilk(coffee)

    drinkCoffee(coffeeWithMilk)
}

//! === 3. await try/catch ===
const orderCoffeeMaybe = async () => {
    try {
        const coffee = await getAsyncCoffee(false)
        drinkCoffee(coffee)
    } catch (error) {
        console.log("Det blev inget kaffe:", error)
    }
}

//orderCoffee()
//orderCoffeeWithMilk()
orderCoffeeMaybe()