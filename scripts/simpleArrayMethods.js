// ArrayMethods

const fruits = ["🥭 mango", "🍌 banan", "🍊 apelsin", "🥝 kiwi"]

console.log(fruits[0])
console.log(fruits)

//* push lägger till sist i arrayen
fruits.push("🍍 annans")

console.log("push", fruits)

//* pop tar bort sist i arrayen
fruits.pop()

console.log("pop", fruits)

//* unshift lägger till först i arrayen
fruits.unshift("🍎 äpple")

console.log("unshift", fruits)

//* shift tar bort först i arrayen
fruits.shift()

console.log("shift", fruits)

//* at()
console.log("at postion 0:", fruits.at(0))
console.log("at popstion -1", fruits.at(-1))

//* indexOf()
console.log("Indexplats för banan:", fruits.indexOf("🍌 banan"))
console.log("Indexplats för mango:", fruits.indexOf("🥭 mango"))
console.log("Indexplats för kiwi:", fruits.indexOf("🥝 kiwi"))

//* includes() returnerar true/false
console.log("Finns banan i listan?", fruits.includes("🍌 banan"))
console.log("Finns kiwi i listan?", fruits.includes("🥝 kiwi"))

//* slice() Skär en array
const slicedFruits = fruits.slice(1, 3)

console.log(slicedFruits)
console.log(fruits)
