/* EJERCICIO 01 */

const names = (prompt('Ingrese su nombre', ''));
const age = parseInt(prompt('Ingrese su edad', ''));

if(Number.isNaN(age)){ /* Si el valor ingresado no es numérico. */
    document.write('Debe ingresar un número')
} else if (age >= 18) {
    alert(`Felicitaciones ${names}, puede conducir`);
} else {
    alert(`Lo sentimos ${names}, con ${age} años NO puede conducir`);
}

