//Steg 1
function calculatePrice(price, quantity) {
    return price * quantity
}

const totalPrice = calculatePrice(2, 15)

console.log(totalPrice)

//Steg 2
function applyDiscount(total, percent = 10) {
    return total * (1 - percent / 100)
}

console.log(applyDiscount(totalPrice))
console.log(applyDiscount(totalPrice, 50))

//Steg 3
function getSize(ml) {
    if (ml < 250) {
        return "Liten"
    }

    if (ml < 400) {
        return "Mellan"
    }

    return "Stor"
}

console.log(getSize(250))

//Steg 4
function createStampeCard() {
    let stamps = 0

    return function () {
        stamps++

        if (stamps > 10) {
            return "Du får gratis kaffe ☕️"
        }

        return stamps
    }

}

const johansCard = createStampeCard()

console.log("Antal stämplar:", johansCard())
console.log("Antal stämplar:", johansCard())
console.log("Antal stämplar:", johansCard())

for (let i = 3; i < 10; i++) {
    johansCard()
}

console.log(johansCard())

const lisasCard = createStampeCard()

console.log("Lisas stämplar:", lisasCard())