const API_URL = "https://jsonplaceholder.typicode.com/todos"

//! === 1. fetch ===

const getTodos = (id) => {
    const todos = fetch(API_URL)
    console.log("fetch direkt utan await:", todos)
}

getTodos()

//! === 2. fetch() med await ===

const getAwaitTodos = async () => {
    const todos = await fetch(API_URL)

    console.log("fetch med await:", todos)
}

getAwaitTodos()

//! === 3. fetch() med await och json()

const getAwaitParseTodos = async () => {
    const response = await fetch(API_URL)

    const todos = await response.json()

    console.log("fetch med await och json:", todos)
}

getAwaitParseTodos()