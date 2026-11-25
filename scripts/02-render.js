const API_URL = "https://jsonplaceholder.typicode.com/todos"

const statusBar = document.getElementById("status")
const todoList = document.getElementById("todo-list")

const getTodos = async () => {
    const response = await fetch(API_URL)

    console.log(response)

    if (!response.ok) {
        throw new Error(`Kunde inte hämta todos ${response.status}`)
    }

    const todos = await response.json()

    return todos
}

const createTodoCard = (todo) => {
    const todoLi = document.createElement("li")
    todoLi.classList.add("card")

    todoLi.textContent = todo.title

    return todoLi
}

const renderTodoList = async () => {
    statusBar.textContent = "Hämtar todos..."

    try {
        const todos = await getTodos()

        statusBar.textContent = ""

        todos.forEach((todo) => {
            const todoLi = createTodoCard(todo)

            todoList.append(todoLi)
        })

    } catch (error) {
        statusBar.textContent = `Någonting gick fel: ${error.message}`
    }
}

renderTodoList()