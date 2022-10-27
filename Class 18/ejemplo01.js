const usersdata = [
    {
        names: 'Flavia', password: 'abc12344'
    },
    {
        names: 'Laura', password: 'adfasdfasd'
    },
    {
        names: 'Pablo', password: 'hkljgf14'
    },
    {
        names: 'Lorena', password: 'gfoklja90'
    },
    {
        names: 'Virginia', password: 'trerwe223'
    }
]

/* No es posible llamar los datos password directamente porque están dentro de un objeto, es necesario generar otro array. */

const onlypassword = usersdata.map(function(p){
    return p.password;
})

console.log(onlypassword);