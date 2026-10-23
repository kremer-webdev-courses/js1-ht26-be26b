function logg() {
    console.log("Jag är en funktion")
}

logg()

//return

function add(a, b) {
    return a + b
}

const result1 = add(1, 2)
const result2 = add(3, 7)

console.log("Result 1 from function add:", result1)
console.log("Result 2 from function add:", result2)

function checkAge(age) {
    if (age >= 18) {
        return "Du får komma in ✅"
    }

    return "Du är för ung, du får inte komma in 🛑"
}

console.log(checkAge(25))
console.log(checkAge(16))

function greet(name = "okänd") {
    return "👋 Hej " + name
}

console.log(greet("Lisa"))
console.log(greet())

//Funktion, return, loop, array
const students = [
    { name: "Alice", age: 23, active: true },
    { name: "Bob", age: 17, active: false },
    { name: "Charlie", age: 30, active: true },
    { name: "Diana", age: 21, active: true },
]

function countActive(list) {
    let count = 0

    for (let i = 0; i < list.length; i++) {
        const item = list[i]

        if (item.active) {
            count++
        }
    }

    return count
}

console.log("Antal aktiva studenter:", countActive(students))