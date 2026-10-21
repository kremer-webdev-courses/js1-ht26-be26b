//* Logiska operatorer
// ==, ===, <, >, <=, >=, ||, &&, !
console.log("-- Logiska operatorer --")
console.log(1 + 1 === "2")
console.log("1 == true:", 1 == true)
console.log("1 === true:", 1 === true)

console.log("1 < 2:", 1 < 2)
console.log("1 > 2:", 1 > 2)

console.log("1 <= 2", 1 <= 2)


//* Truthy & Falsy
/*
----------------------------------------------------------------
? Falsy
----------------------------------------------------------------
Value	        Type	    Description
null	        Null	    The keyword null — the absence of any value.
undefined	    Undefined	undefined — the primitive value.
false	        Boolean	    The keyword false.
NaN	            Number	    Not a Number (represents an invalid or undefined result from a calculation.)
0	            Number	    The Number zero, also including 0.0, 0x0, etc.
-0	            Number	    The Number negative zero, also including -0.0, -0x0, etc.
0n	            BigInt	    The BigInt zero, also including 0x0n, etc. Note that there is no BigInt negative zero — the negation of 0n is 0n.
""	            String	    Empty string value, also including '' and ``.
document.all	Object	    The only falsy object in JavaScript is the built-in document.all.

----------------------------------------------------------------
? Truthy
----------------------------------------------------------------
All values are truthy except false values.
*/

//* If/else satser


if (1 > 2) {
    console.log("✅ Detta är sant!")
} else {
    console.log("🛑 Detta är inte sant")
}

const age = 35
const withAParent = false

if (age >= 18 && withAParent) {
    console.log("✅ Du får komma in!")
} else {
    console.log("🛑 Du får inte komma in!")
}