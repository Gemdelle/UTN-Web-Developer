/* Filter employees to keep developers. */

const employees = [
    {
        names: 'Mamy', job: 'Teacher'
    },
    {
        names: 'Gemy', job: 'Developer'
    },
    {
        names: 'Hunny', job: 'Developer'
    },
    {
        names: 'Jony', job: 'Developer'
    },
    {
        names: 'Esty', job: 'Designer'
    },
    {
        names: 'Exy', job: 'Photographer'
    }
]

const developer = employees.filter(
    employee => employee.job == 'Developer'
)

console.log(developer);

const nondeveloper = employees.filter(
    employee => employee.job !== 'Developer'
)

console.log(nondeveloper);