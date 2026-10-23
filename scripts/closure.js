//Closure

//Steg 1
function createGreet(greeting) {
    return function (name) {
        return greeting + " " + name

    }
}

const sayHello = createGreet("👋 Hej")
const sayGodmorning = createGreet("🌞 Godmorgon")

console.log(sayHello("Lisa"))
console.log(sayGodmorning("Kajsa"))

//Steg 2
function createCounter() {
    let count = 0

    return function () {
        count++
        return count
    }
}

const counter1 = createCounter()
console.log("Räknare 1")
console.log(counter1())
console.log(counter1())
console.log(counter1())

const counter2 = createCounter()
console.log("Räknare 2")
console.log(counter2())
console.log(counter2())
console.log(counter2())