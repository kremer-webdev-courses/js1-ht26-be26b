//Closure
/*
  En closure uppstår när en funktion "kommer ihåg" variablerna från stället
  där den skapades, även efter att den yttre funktionen har körts klart.
  Den inre funktionen får alltså med sig en egen "ryggsäck" med variabler.
*/

//Steg 1
/*
  createGreet körs klart och returnerar den inre funktionen.
  Ändå minns den inre funktionen värdet på "greeting".
  Varje anrop av createGreet ger en egen ryggsäck:
  sayHello minns "👋 Hej", sayGodmorning minns "🌞 Godmorgon".
*/
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
/*
  "count" är en lokal variabel i createCounter och kan inte nås utifrån.
  Men den inre funktionen minns den och kan ändra den, så värdet sparas mellan anrop.
  Varje anrop av createCounter skapar en ny, egen "count",
  därför räknar counter1 och counter2 oberoende av varandra.
*/
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