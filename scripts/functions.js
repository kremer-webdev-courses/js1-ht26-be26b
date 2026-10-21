//Varför funktioner?!

console.log("Hej Mohammed!")
console.log("Hej Lisa!")
console.log("Hej Stina!")

function basicFunction() {
    console.log("Jag är en funktion! 🔥")
}

basicFunction()
basicFunction()
basicFunction()

const fruit = "banan"

function greet(name) {
    console.log("Hej", name)
}

greet("Mohammed")
greet("Lisa")
greet("Stina")

add(1, 2)
add("1", "2")
add(1, 5)

//Typescript
function add(a, b) {
    console.log(a + b)
}

//functions blir hoistade 🏗️ ⬆️ ✅, 
//arrow functions 🏹 blir inte hoistade 🛑

//arrow-function
const arrowFunction = name => console.log(name)

arrowFunction("Olof 🔥")