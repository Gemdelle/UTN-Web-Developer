function getNamesDaysForMonth(month) {
    if (Number.isNaN(month)) return false; /* Has to be a number. */

    if (month < 1 || month > 12) return false; /* Month has to be between 1 and 12. */

    month--; /* 10 > 0 so october would be the element number 9 because it starts from 0. */

    const data =[
        {
            name: 'January',
            days: 31
        },
        {
            name: 'February',
            days: 28
        },
        {
            name: 'March',
            days: 31
        },
        {
            name: 'April',
            days: 30
        },
        {
            name: 'May',
            days: 31
        },
        {
            name: 'June',
            days: 30
        },
        {
            name: 'July',
            days: 31
        },
        {
            name: 'August',
            days: 31
        },
        {
            name: 'September',
            days: 30
        },
        {
            name: 'October',
            days: 31
        },
        {
            name: 'November',
            days: 30
        },
        {
            name: 'December',
            days: 31
        }
    ]

    return data[month];
}

const numMonth = parseInt(prompt('Ingrese el mes del año', ''));
const result = getNamesDaysForMonth(numMonth);

if(result) {
    alert(`El mes ${result.name} tiene ${result.days} días.`)
} else {
    alert('Mes inválido');
}