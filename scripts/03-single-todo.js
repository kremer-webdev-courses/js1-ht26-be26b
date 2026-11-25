const API_URL = "https://jsonplaceholder.typicode.com/todos"

const statusBar = document.getElementById("status")
const todoList = document.getElementById("todo-list")
const todoForm = document.getElementById("todo-form")
const todoIdInput = document.getElementById("todo-id")
const nextButton = document.getElementById("next-button")

// Hämtar EN todo med hjälp av dess id, t.ex. .../todos/5
const getTodo = async (id) => {
    const response = await fetch(`${API_URL}/${id}`)

    if (!response.ok) {
        throw new Error(`Kunde inte hämta todo ${id} (${response.status})`)
    }

    const todo = await response.json()

    return todo
}

const createTodoCard = (todo) => {
    const todoLi = document.createElement("li")
    todoLi.classList.add("card")

    const title = document.createElement("h3")
    title.textContent = `#${todo.id} ${todo.title}`

    const status = document.createElement("p")
    status.textContent = todo.completed ? "✅ Klar" : "⏳ Inte klar"

    todoLi.append(title, status)

    return todoLi
}

const renderTodo = async (id) => {
    statusBar.textContent = `Hämtar todo ${id}...`

    try {
        const todo = await getTodo(id)

        statusBar.textContent = ""

        const todoLi = createTodoCard(todo)
        todoList.append(todoLi)

    } catch (error) {
        statusBar.textContent = `Någonting gick fel: ${error.message}`
    }
}

// Hämta den todo som användaren skrivit in
todoForm.addEventListener("submit", (event) => {
    event.preventDefault()

    renderTodo(todoIdInput.value)
})

// Räkna upp id:t och hämta nästa todo
nextButton.addEventListener("click", () => {
    const nextId = Number(todoIdInput.value) + 1

    todoIdInput.value = nextId

    renderTodo(nextId)
})
