//Async - Sync

//! ==== 1 ====
const guessTheOrder = () => {
    console.log("A")

    setTimeout(() => {
        console.log("B")
    }, 0)

    console.log("C")

    setTimeout(() => {
        console.log("D")
    }, 2000)

    console.log("E")
}

//! === 2 ===
let asyncCoffe

const coffeeExample = () => {
    const syncCoffe = "☕️"

    console.log("✅☕️ Sätt på kaffebryggaren!")

    console.log("Synkront kaffe:", syncCoffe)

    setTimeout(() => {
        asyncCoffe = "☕️"
    }, 2000)

    console.log("Asynkront kaffe (för tidigt):", asyncCoffe)

    setTimeout(() => {
        console.log("Asynkront kaffe:", asyncCoffe)
    }, 2500)
}

//! === 3 ===
const returnExample = () => {
    const getSyncCoffee = () => {
        return "☕️"
    }

    const syncCoffe = getSyncCoffee()

    console.log("Synkront kaffe:", syncCoffe)

    const getAsyncCoffee = () => {
        setTimeout(() => {
            return "☕️"
        }, 2000)
    }

    const asyncCoffe = getAsyncCoffee()

    console.log("Asynkront kaffe:", asyncCoffe)
}

//! === 4 ===
const callbackExample = () => {
    const drinkCoffee = (coffee) => {
        console.log("Mums, dags att dricka kaffe", coffee)
    }

    const getSyncCoffee = (callback) => {
        callback("☕️")
    }

    getSyncCoffee(drinkCoffee)

    const getAsyncCoffe = (callback) => {
        setTimeout(() => {
            callback("☕️")
        }, 2000)
    }

    getAsyncCoffe(drinkCoffee)

    console.log("🕝 Gör något annat medans kaffet bryggs")
}

//! Kör en i taget för att hålla konsolen ren
// guessTheOrder()
// coffeeExample()
// returnExample()
callbackExample()