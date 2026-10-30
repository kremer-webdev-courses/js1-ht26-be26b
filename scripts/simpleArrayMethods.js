/*
 * ============================================================
 *  ÖVERSIKT: ARRAYER OCH ENKLA ARRAY-METODER
 * ============================================================
 *
 *  En array är en ordnad lista med värden. Varje värde har en
 *  position (index) som börjar på 0:
 *      fruits[0]   // första elementet
 *
 *  Array-metoder är inbyggda funktioner som du anropar på
 *  arrayen med punktnotation: fruits.push(...)
 *
 * ------------------------------------------------------------
 *  Lägga till och ta bort (ÄNDRAR originalarrayen)
 * ------------------------------------------------------------
 *  .push(x)
 *    Lägger till x sist.
 *    Returnerar: nya längden
 *
 *  .pop()
 *    Tar bort sista elementet.
 *    Returnerar: elementet som togs bort
 *
 *  .unshift(x)
 *    Lägger till x först.
 *    Returnerar: nya längden
 *
 *  .shift()
 *    Tar bort första elementet.
 *    Returnerar: elementet som togs bort
 *
 * ------------------------------------------------------------
 *  Läsa och söka (ÄNDRAR INTE originalarrayen)
 * ------------------------------------------------------------
 *  .at(i)
 *    Hämtar elementet på index i. Negativa tal räknar bakifrån:
 *    at(-1) är sista elementet.
 *    Returnerar: elementet
 *
 *  .indexOf(x)
 *    Letar efter x.
 *    Returnerar: indexet, eller -1 om det inte finns
 *
 *  .includes(x)
 *    Kollar om x finns i arrayen.
 *    Returnerar: true eller false
 *
 *  .slice(start, slut)
 *    Kopierar en del av arrayen. Slutindexet ingår inte.
 *    Returnerar: ny array
 */

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