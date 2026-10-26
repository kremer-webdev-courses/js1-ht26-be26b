//Array metoder avancerade

const students = [
    { id: 1, name: "Alice", age: 23, active: true, course: "JavaScript" },
    { id: 2, name: "Bob", age: 25, active: false, course: "HTML/CSS" },
    { id: 3, name: "Charlie", age: 22, active: true, course: "JavaScript" },
    { id: 4, name: "Diana", age: 24, active: false, course: "React" },
    { id: 5, name: "Elias", age: 26, active: true, course: "HTML/CSS" },
    { id: 6, name: "Fatima", age: 21, active: true, course: "JavaScript" },
]

//* Callback function
function sayHello(name) {
    console.log("👋 Hej", name)
}

function runTwice(callback) {
    callback("Lisa")
    callback("Stina")
}

runTwice(sayHello)

//Med for-loop
console.log("--Lista med for-loop--")
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name)
}

//.forEach()
console.log("--Lista med for-Each--")
students.forEach((student, index) => console.log(index + 1, student.name))

const noReturn = students.forEach(student => student.name)

console.log("forEach returnerar inget: ", noReturn)

//.map() returnerar en ny lista
const studentNames = students.map(student => student.name)

console.log(studentNames)