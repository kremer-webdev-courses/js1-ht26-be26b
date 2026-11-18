//! === 1 ===

const allTimersAtOnce = () => {
    setTimeout(() => {
        console.log("📩 Paketet har registrerats")
    }, 5000)

    setTimeout(() => {
        console.log("🚗 Paketet har skickats")
    }, 2000)

    setTimeout(() => {
        console.log("🌐 Paketet är i din stad")
    }, 3000)

    setTimeout(() => {
        console.log("📦 Paketet har levererats")
    }, 4000)
}

//! === 2 ===
const nestedTimers = () => {
    setTimeout(() => {
        console.log("📩 Paketet har registrerats")

        setTimeout(() => {
            console.log("🚗 Paketet har skickats")

            setTimeout(() => {
                console.log("🌐 Paketet är i din stad")

                setTimeout(() => {
                    console.log("📦 Paketet har levererats")

                }, 1000)

            }, 1000)

        }, 5000)

    }, 1000)
}

//! === 3 ===


const registerPackage = (callback) => {
    setTimeout(() => {
        console.log("📩 Paketet har registrerats")

        callback()
    }, 1000)
}

const sendPackage = (callback) => {
    setTimeout(() => {
        console.log("🚗 Paketet har skickats")

        callback()
    }, 2000)
}

const transportPackage = (callback) => {
    setTimeout(() => {
        console.log("🌐 Paketet är i din stad")

        callback()
    }, 4000)
}

const deliverPackage = (callback) => {
    setTimeout(() => {
        console.log("📦 Paketet har levererats")

        callback()
    }, 1000)
}

const nestedFunctions = () => {
    registerPackage(() => {
        sendPackage(() => {
            transportPackage(() => {
                deliverPackage(() => {
                    console.log("✅ Klar")
                })
            })
        })
    })
}

//! Kör en i taget för att hålla konsolen ren
//allTimersAtOnce()
//nestedTimers()
nestedFunctions()

//Promise, .then, async/await