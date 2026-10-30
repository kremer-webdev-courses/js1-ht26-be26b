const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")

todoForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const todoText = todoInput.value

    console.log(todoText)

    const todoLi = document.createElement("li")
    todoLi.textContent = todoText

    todoList.append(todoLi)
})