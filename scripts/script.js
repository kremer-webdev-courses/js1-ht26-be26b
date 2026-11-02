const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const todoHelp = document.querySelector("#todoHelp")

function createDeleteButton(todoLi) {
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Ta bort"
    deleteButton.classList.add("btn-solid", "theme-danger", "btn-sm")

    deleteButton.addEventListener("click", () => {
        todoLi.remove()
    })

    return deleteButton
}

function createDoneButton(todoLi) {
    const doneButton = document.createElement("button")
    doneButton.textContent = "Klar"
    doneButton.classList.add("btn-solid", "theme-success", "btn-sm")

    doneButton.addEventListener("click", () => {
        todoLi.classList.toggle("theme-success")
    })

    return doneButton
}

function createButtonContainer(doneButton, deleteButton) {
    const buttonContainer = document.createElement("div")
    buttonContainer.classList.add("d-flex", "gap-3")

    buttonContainer.append(doneButton, deleteButton)

    return buttonContainer
}

function createTodoLi(todoText) {
    const todoLi = document.createElement("li")
    todoLi.classList.add("list-group-item", "d-flex", "justify-content-between", "align-item")

    const liText = document.createElement("span")
    liText.textContent = todoText

    const deleteButton = createDeleteButton(todoLi)

    const doneButton = createDoneButton(todoLi)

    const buttonContainer = createButtonContainer(doneButton, deleteButton)

    todoLi.append(liText)
    todoLi.append(buttonContainer)

    return todoLi
}

todoForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const todoText = todoInput.value.trim()

    //felhantering
    if (todoText.length <= 2) {
        todoHelp.textContent = "Du måste skriva minst 3 tecken"
        todoHelp.classList.add("fg-danger")
        return
    }

    const todoLi = createTodoLi(todoText)

    todoList.append(todoLi)

    todoInput.value = ""
    todoInput.focus()
})