// Destruct & spread

// const product = {
//     id: 1,
//     title: "Hörlurar",
//     price: 799,
//     category: "Elektronik",
//     color: "svart"
// }

// console.log(product.id, product.title)


// const { title, category } = product

// console.log(title, category)

// //destruct av ett objekt i parametrarna på en funktion
// function exempelProdukt({ title, price }) {
//     console.log(`Varan: ${title} kostar: ${price}`)
// }

// exempelProdukt(product)

//Destrukt av en array
const colors = ["❤️ röd", "💚 grön", "💙 blå"]

const [röd, grön] = colors

console.log(röd, grön)

//spread ...

const first = ["🔥", "jag", "är", "själv"]
const second = ["🌊", "jag", "är", "också", "själv"]

const tillsammans = [...first, "nu är ni tillsammans", ...second]

console.log(tillsammans)

const products = [
    { id: 1, title: "Hörlurar", category: "Elektronik", price: 799, inStock: true },
    { id: 2, title: "Ryggsäck", category: "Väskor", price: 549, inStock: false },
    { id: 3, title: "Laddare", category: "Elektronik", price: 249, inStock: true },
    { id: 4, title: "Termos", category: "Kök", price: 329, inStock: false },
    { id: 5, title: "Mus", category: "Elektronik", price: 399, inStock: true },
    { id: 6, title: "Kaffemugg", category: "Kök", price: 129, inStock: true },
    { id: 7, title: "Örhängen", category: "Accessoarer", price: 199, inStock: true },
    { id: 8, title: "Äggklocka", category: "Kök", price: 89, inStock: true },
    { id: 9, title: "Armband", category: "Accessoarer", price: 149, inStock: false },
    { id: 10, title: "Tangentbord", category: "Elektronik", price: 649, inStock: true },
    { id: 11, title: "Vattenflaska", category: "Kök", price: 179, inStock: true },
    { id: 12, title: "Plånbok", category: "Accessoarer", price: 299, inStock: true },
    { id: 13, title: "Datorväska", category: "Väskor", price: 449, inStock: true },
    { id: 14, title: "Solglasögon", category: "Accessoarer", price: 349, inStock: false },
]

const product = {
    id: 15,
    title: "Gymväska",
    category: "Väskor",
    price: 399,
    inStock: true
}

console.log("Innan .push()", products)

products.push(product)

console.log("Efter .push()", products)

const newProductArray = [...products, product]

console.log(newProductArray)

console.log(products)