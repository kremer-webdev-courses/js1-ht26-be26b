//spara todos i local storage
export function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos))
}

//hämta todos från local storage
export function loadTodos() {
    const savedTodos = localStorage.getItem("todos")

    if (savedTodos === null) {
        return []
    }

    return JSON.parse(savedTodos)
}