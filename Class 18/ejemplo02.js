const students = [
    {
        names: 'Hunny', age: 10
    },
    {
        names: 'Gemy', age: 3
    },
    {
        names: 'Jony', age: 5
    },
    {
        names: 'Exy', age: 2
    },
    {
        names: 'Inhumy', age: 4
    },
    {
        names: 'Kabry', age: 1
    }
]

const kids = students.filter(
    student => student.age <= 4
)

console.log(kids);

for (let i = 0; i < kids.length; i++) {
    document.write(`<p>Kid: ${kids[i].names}, cuya edad es ${kids[i].age}.</p>`)
}
