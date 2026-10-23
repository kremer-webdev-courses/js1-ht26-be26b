//Scope

let global = "Global variabel 🌎"

function lokalVariabel() {
    const lokal = "Lokal varibel"
}

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