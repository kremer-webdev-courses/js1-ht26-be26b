//Array metoder avancerade

const students = [
    { id: 1, name: "Alice", age: 23, active: true, course: "JavaScript" },
    { id: 2, name: "Bob", age: 25, active: false, course: "HTML/CSS" },
    { id: 3, name: "Charlie", age: 22, active: true, course: "JavaScript" },
    { id: 4, name: "Diana", age: 24, active: false, course: "React" },
    { id: 5, name: "Elias", age: 26, active: true, course: "HTML/CSS" },
    { id: 6, name: "Fatima", age: 21, active: true, course: "JavaScript" },
    { id: 7, name: "Gustav", age: 27, active: true, course: "React" },
    { id: 8, name: "Hanna", age: 22, active: false, course: "JavaScript" },
    { id: 9, name: "Ivan", age: 29, active: true, course: "HTML/CSS" },
    { id: 10, name: "Julia", age: 24, active: true, course: "React" },
    { id: 11, name: "Karim", age: 23, active: false, course: "HTML/CSS" },
    { id: 12, name: "Linnea", age: 25, active: true, course: "JavaScript" },
    { id: 13, name: "Mohammed", age: 28, active: false, course: "React" },
    { id: 14, name: "Nora", age: 21, active: true, course: "JavaScript" },
    { id: 15, name: "Oskar", age: 26, active: true, course: "HTML/CSS" },
    { id: 16, name: "Petra", age: 30, active: false, course: "JavaScript" },
    { id: 17, name: "Qasim", age: 22, active: true, course: "React" },
    { id: 18, name: "Rebecka", age: 24, active: true, course: "HTML/CSS" },
    { id: 19, name: "Sam", age: 27, active: false, course: "React" },
    { id: 20, name: "Tove", age: 23, active: true, course: "JavaScript" },
    { id: 21, name: "Ulf", age: 25, active: true, course: "HTML/CSS" },
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

//* Med for-loop
console.log("--Lista med for-loop--")
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name)
}

//* .forEach()
console.log("--Lista med for-Each--")
students.forEach((student, index) => console.log(index + 1, student.name))

const noReturn = students.forEach(student => student.name)

console.log("forEach returnerar inget: ", noReturn)

//* .map() returnerar en ny lista
const studentNames = students.map(student => student.name)

console.log(studentNames)

//* .filter()
const activeStudents = students.filter(student => student.active)

console.log(activeStudents)
console.log("Innan filter", students.length)
console.log("Efter filter", activeStudents.length)
console.log("Antal studenter som filtererats bort:", students.length - activeStudents.length)

const reactStudents = students.filter(student => student.course === "React")

console.log(`🔥 Antal studenter som läser React: ${reactStudents.length}`)

//* .find()
const firstReactStudent = students.find(student => (student.course === "React" && student.active))

console.log(firstReactStudent)

//Template literals
// `${}`