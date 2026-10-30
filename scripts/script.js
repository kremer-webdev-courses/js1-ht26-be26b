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

const colors = ["red", "blue", "green", "violet", "orange"]
let colorCount = 0

colorButton.addEventListener("click", () => {
    colorBox.classList.remove(...colors)

    if (colorCount >= colors.length) {
        colorCount = 0
    }

    colorBox.classList.add(colors[colorCount])

    colorCount++
})

colorButtomRemove.addEventListener("click", () => {
    colorBox.classList.remove(...colors)
})