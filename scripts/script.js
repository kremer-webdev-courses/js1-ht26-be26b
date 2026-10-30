const testButton = document.querySelector(".test-button")
const helloButton = document.querySelector(".hello-button")
const helloText = document.querySelector(".hello-text")
const colorButton = document.querySelector(".color-button")
const colorButtomRemove = document.querySelector(".color-button-remove")
const colorBox = document.querySelector(".color-box")

testButton.addEventListener("click", () => {
    console.log("🔥 Klick")
})

helloButton.addEventListener("click", () => {
    helloText.textContent = "Hej 👋"
})

const colors = ["red", "blue", "green", "violet"]

colorButton.addEventListener("click", () => {
    colorBox.classList.add(colors[3])
})

colorButtomRemove.addEventListener("click", () => {
    colorBox.classList.remove("red")
})