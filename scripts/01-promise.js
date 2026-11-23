//! === 1. Promise resolve ===

const coffeIsReady = () => {

    const getAsyncCoffee = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("☕️")
            }, 2000)
        })
    }

    const coffePromise = getAsyncCoffee()

    console.log("Promise direkt:", coffePromise)

    setTimeout(() => {
        console.log("Promise efter 2,5 sec:", coffePromise)
    }, 2500)
}

//! === 2. Promise resolve/reject

const outOfBeans = () => {
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

    const coffePromise = getAsyncCoffee("Vi har bönor")

    console.log("Kaffe promise direkt:", coffePromise)

    setTimeout(() => {
        console.log("Kaffe promise efter 2,5 sec:", coffePromise)
    }, 2500)
}

//coffeIsReady()
outOfBeans()