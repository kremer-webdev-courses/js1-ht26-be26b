
const products = [
    { id: 1, name: "Hörlurar", category: "Elektronik", price: 799, inStock: true },
    { id: 2, name: "Ryggsäck", category: "Väskor", price: 549, inStock: false },
    { id: 3, name: "Laddare", category: "Elektronik", price: 249, inStock: true },
    { id: 4, name: "Termos", category: "Kök", price: 329, inStock: false },
    { id: 5, name: "Mus", category: "Elektronik", price: 399, inStock: true },
    { id: 6, name: "Kaffemugg", category: "Kök", price: 129, inStock: true },
    { id: 7, name: "Örhängen", category: "Accessoarer", price: 199, inStock: true },
    { id: 8, name: "Äggklocka", category: "Kök", price: 89, inStock: true },
    { id: 9, name: "Armband", category: "Accessoarer", price: 149, inStock: false },
    { id: 10, name: "Tangentbord", category: "Elektronik", price: 649, inStock: true },
    { id: 11, name: "Vattenflaska", category: "Kök", price: 179, inStock: true },
    { id: 12, name: "Plånbok", category: "Accessoarer", price: 299, inStock: true },
    { id: 13, name: "Datorväska", category: "Väskor", price: 449, inStock: true },
    { id: 14, name: "Solglasögon", category: "Accessoarer", price: 349, inStock: false },
    { id: 15, name: "Gymväska", category: "Väskor", price: 399, inStock: true },
]

// .reduce()
console.group(".reduce()")
const numbers = [5, 10, 15, 20]

const sum = numbers.reduce((acc, number) => {
    console.log("acc:", acc, "number:", number)
    return acc + number
}, 0)

console.log("Summan av numbers:", sum)

const totalPrice = products.reduce((acc, product) => {
    console.log("acc:", acc, "number:", product.price)
    return acc + product.price
}, 0)

console.log(totalPrice)

console.groupEnd()

// .sort()
console.group(".sort()")

const fruits = ["mango 🥭 ", "banan 🍌", "apelsin 🍊", "kiwi 🥝"]

const sortedFruits = fruits.toSorted()

console.log("Osorterad frukt:", fruits)
console.log("Sorterad frukt", sortedFruits)

numbers.sort()

console.log(numbers)

numbers.sort((a, b) => {
    return a - b
})

console.log(numbers)

const productsByLowestPrice = products.toSorted((a, b) => {
    return a.price - b.price
})

const productsByHigestPrice = products.toSorted((a, b) => {
    return b.price - a.price
})

console.log("💰 Lägsta till högsta pris:", productsByLowestPrice)
console.log("💰 Högsta till lägsta pris:", productsByHigestPrice)

//* .sort(), localCompare

const productsByName = products.sort((a, b) => a.name.localeCompare(b.name, "sv"))

console.log("Efter namn:", productsByName.map(product => product.name))

console.groupEnd()