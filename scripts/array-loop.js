const fruits = ["🍌 banan", "🍎 äpple", "🥝 kiwi", "🍊 apelsin", "🥭 mango"]

console.log("Alla frukter:", fruits)
console.log("Första frukten:", fruits[0])
console.log("Antal:", fruits.length)

console.log("--Fruktsallad--")

for (let i = 0; i < fruits.length; i++) {

    if (fruits[i] === fruits[4]) {
        console.log(fruits[i], "är den bästa frukten, vilket alla vet...")
    } else {
        console.log(fruits[i])
    }
}

const students = [
    { id: 1, name: "Alice", age: 23, active: true, course: "JavaScript" },
    { id: 2, name: "Bob", age: 25, active: false, course: "HTML/CSS" },
    { id: 3, name: "Charlie", age: 22, active: true, course: "JavaScript" },
    { id: 4, name: "Diana", age: 24, active: false, course: "React" },
    { id: 5, name: "Elias", age: 26, active: false, course: "HTML/CSS" },
    { id: 6, name: "Fatima", age: 21, active: true, course: "JavaScript" },
    { id: 7, name: "Gabriel", age: 23, active: true, course: "React" },
    { id: 8, name: "Hanna", age: 22, active: false, course: "HTML/CSS" },
    { id: 9, name: "Isak", age: 27, active: true, course: "JavaScript" },
    { id: 10, name: "Julia", age: 24, active: true, course: "React" },
    { id: 11, name: "Kevin", age: 23, active: false, course: "HTML/CSS" },
    { id: 12, name: "Lina", age: 21, active: true, course: "JavaScript" },
    { id: 13, name: "Marcus", age: 25, active: true, course: "React" },
    { id: 14, name: "Nora", age: 22, active: true, course: "JavaScript" },
    { id: 15, name: "Oskar", age: 26, active: false, course: "HTML/CSS" },
    { id: 16, name: "Petra", age: 24, active: true, course: "React" },
    { id: 17, name: "Quentin", age: 23, active: true, course: "JavaScript" },
    { id: 18, name: "Rashid", age: 27, active: false, course: "HTML/CSS" },
    { id: 19, name: "Sara", age: 22, active: true, course: "React" },
    { id: 20, name: "Tom", age: 25, active: true, course: "JavaScript" }
]

console.log("-- Studenter --")
for (let i = 0; i < students.length; i++) {
    console.log("-------------------")
    console.log(students[i].name, "är", students[i].age, "år gammal")

    if (students[i].course === "JavaScript") {
        console.log("Denna studenten läser javascript!")
    }
}

console.log("-- Continue & Break --")

for (let i = 0; i < students.length; i++) {
    const student = students[i]

    if (!student.active) {
        console.log("Hoppar över student", student.name, "eftersom studenten inte är aktiv")
        continue
    }

    if (student.course === "React") {
        console.log("✋ Hittade första studenten som läser kursen React", student.name)
        break
    }

    console.log("Aktiv student:", student.name)
}

//for-in
const student = {
    id: 1,
    name: "Alice",
    age: 23,
    active: true,
    course: "JavaScript"
}

console.log("🔥 -- For-in-loop -- 🔥")

for (let key in student) {
    console.log(key + ":" + student[key])
}