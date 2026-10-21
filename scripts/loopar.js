console.log("-- Upprepande consol.log --")
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

console.log("-- For-loop --")

//For
for (let i = 0; i < 5; i++) {
    console.log(i + 1)
}

let stars = ""

//For stars
for (let i = 0; i < 5; i++) {
    stars += "⭐️"
    console.log(stars)
}

//While
console.log("-- While-loop --")

let number = 0

while (number <= 10) {
    if (number <= 0) {
        console.log("Starta räkningen")
    }

    console.log("while loop", number)

    if (number >= 10) {
        console.log("Vi är i mål!")
    }

    number++
}

//Do-While
console.log("-- Do-While-loop --")

let i = 0

do {
    console.log("Do while loop", i)
    i++
} while (i < 5)