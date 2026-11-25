const API_URL = "https://jsonplaceholder.typicode.com/todos"

const statusBar = document.getElementById("status")
const todoList = document.getElementById("todo-list")

const getTodos = async () => {
    const response = await fetch(API_URL)

    const todos = await response.json()

    return todos
}

const createTodoCard = (todo) => {
    const todoLi = document.createElement("li")

    todoLi.textContent = todo.title

    return todoLi
}

const renderTodoList = async () => {
    statusBar.textContent = "Hämtar todos..."

    const todos = await getTodos()

    statusBar.textContent = ""

    todos.forEach((todo) => {
        const todoLi = createTodoCard(todo)

        todoList.append(todoLi)
    })
}

renderTodoList()