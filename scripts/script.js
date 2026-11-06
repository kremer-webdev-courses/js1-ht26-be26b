const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const todoHelp = document.querySelector("#todoHelp")

const listView = document.querySelector("#list-view")
const detailView = document.querySelector("#detail-view")

const detailInput = document.querySelector("#detail-input")
const detailDone = document.querySelector("#detail-done")
const backButton = document.querySelector("#back-button")

//spara todos i local storage
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos))
}

//hämta todos från local storage
function loadTodos() {
    const savedTodos = localStorage.getItem("todos")

    if (savedTodos === null) {
        return []
    }

    return JSON.parse(savedTodos)
}

let todos = loadTodos()

let selectedId = null

function createDetailButton(todo) {
    const detailButton = document.createElement("button")
    detailButton.textContent = "Se detaljer"
    detailButton.classList.add("btn-solid", "theme-info", "btn-sm")

    detailButton.addEventListener("click", () => {
        selectedId = todo.id

        console.log(todo.id)
        console.log(selectedId)

        renderApp()
    })

    return detailButton
}

function createDeleteButton(todo) {
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Ta bort"
    deleteButton.classList.add("btn-solid", "theme-danger", "btn-sm")

    deleteButton.addEventListener("click", () => {
        todos = todos.filter(item => item.id !== todo.id)

        console.log("Delete button:", todos)

        saveTodos()

        renderApp()
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

        saveTodos()

        renderApp()
    })

    return doneButton
}

function createButtonContainer(detailButton, doneButton, deleteButton) {
    const buttonContainer = document.createElement("div")
    buttonContainer.classList.add("d-flex", "gap-3")

    buttonContainer.append(detailButton, doneButton, deleteButton)

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

    const detailButton = createDetailButton(todo)

    const deleteButton = createDeleteButton(todo)

    const doneButton = createDoneButton(todo)

    const buttonContainer = createButtonContainer(detailButton, doneButton, deleteButton)

    todoLi.append(liText, buttonContainer)

    return todoLi
}

function renderListView() {
    todoList.innerHTML = ""

    todos.forEach((todo) => {
        const todoLi = createTodoLi(todo)

        todoList.append(todoLi)
    })

    console.log("RenderTodos:", todos)
}

function renderDetailView() {
    const todo = todos.find(item => item.id === selectedId)

    detailInput.value = todo.title
    detailDone.checked = todo.done
}

backButton.addEventListener("click", () => {
    selectedId = null

    renderApp()
})

function renderApp() {

    if (selectedId === null) {
        listView.classList.remove("d-none")
        detailView.classList.add("d-none")
        renderListView()
    } else {
        detailView.classList.remove("d-none")
        listView.classList.add("d-none")
        renderDetailView()
    }
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

    saveTodos()

    renderApp()

    todoInput.value = ""
    todoInput.focus()
})

renderApp()