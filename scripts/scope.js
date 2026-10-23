//Scope
/*
  Scope (räckvidd) bestämmer var en variabel går att använda.
  En variabel syns bara i det område ({ }) där den är deklarerad,
  och i områden som ligger inuti det.
*/

/* Global: deklarerad utanför alla funktioner, syns överallt i filen */
let global = "Global variabel 🌎"

/* Lokal: finns bara inuti funktionen. Utanför ger "lokal" ett ReferenceError */
function lokalVariabel() {
    const lokal = "Lokal varibel"
}

/*
  Nästlade funktioner: en inre funktion kan läsa variabler från funktionen
  utanför sig (inner ser outerValue), men inte tvärtom
  (outer kan inte se innerValue).
*/
function outer() {
    const outerValue = "från outer"

    function inner() {
        const innerValue = "från inner"
        console.log("inner ser:", outerValue, "och", innerValue)
        console.log("🔥", outerValue)
        console.log("🌊", innerValue)
    }
    inner()
}

outer()