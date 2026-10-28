// Destruct & spread

const product = {
    id: 1,
    title: "Hörlurar",
    price: 799,
    category: "Elektronik",
    color: "svart"
}

console.log(product.id, product.title)


const { title, category } = product

console.log(title, category)

//destruct av ett objekt i parametrarna på en funktion
function exempelProdukt({ title, price }) {
    console.log(`Varan: ${title} kostar: ${price}`)
}

exempelProdukt(product)

//Destrukt av en array
const colors = ["❤️ röd", "💚 grön", "💙 blå"]

const [first, second] = colors

console.log(first, second)