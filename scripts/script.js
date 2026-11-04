const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const todoHelp = document.querySelector("#todoHelp")

let todos = [
    {
        id: Date.now(),
        title: "Städa",
        done: false
    },
    {
        id: Date.now(),
        title: "Laga mat",
        done: false
    }
]

function createDeleteButton(todo) {
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Ta bort"
    deleteButton.classList.add("btn-solid", "theme-danger", "btn-sm")

    deleteButton.addEventListener("click", () => {
        todos = todos.filter(item => item.id !== todo.id)

        console.log("Delete button:", todos)

        renderTodos()
    })

    return deleteButton
}

function createDoneButton(todo) {
    const doneButton = document.createElement("button")
    doneButton.textContent = "Klar"
    doneButton.classList.add("btn-solid", "theme-success", "btn-sm")

    doneButton.addEventListener("click", () => {
        todo.done = !todo.done

        console.log("Done button:", todos)

        renderTodos()
    })

    return doneButton
}

function createButtonContainer(doneButton, deleteButton) {
    const buttonContainer = document.createElement("div")
    buttonContainer.classList.add("d-flex", "gap-3")

    buttonContainer.append(doneButton, deleteButton)

    return buttonContainer
}

function addTodo(todoText) {
    todos.push({
        id: Date.now(),
        title: todoText,
        done: false
    })
}

function createTodoLi(todo) {
    const todoLi = document.createElement("li")
    todoLi.classList.add("list-group-item", "d-flex", "justify-content-between", "align-item")

    if (todo.done) {
        todoLi.classList.add("theme-success")
    }

    const liText = document.createElement("span")
    liText.textContent = todo.title

    const deleteButton = createDeleteButton(todo)

    const doneButton = createDoneButton(todo)

    const buttonContainer = createButtonContainer(doneButton, deleteButton)

    todoLi.append(liText, buttonContainer)

    return todoLi
}

function renderTodos() {
    todoList.innerHTML = ""

    todos.forEach((todo) => {
        const todoLi = createTodoLi(todo)

        todoList.append(todoLi)
    })

    console.log("RenderTodos:", todos)
}

todoForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const todoText = todoInput.value.trim()

    //felhantering
    if (todoText.length < 3) {
        todoHelp.textContent = "Du måste skriva minst 3 tecken"
        todoHelp.classList.add("fg-danger")
        return
    }

    addTodo(todoText)

    renderTodos()

    todoInput.value = ""
    todoInput.focus()
})

renderTodos()