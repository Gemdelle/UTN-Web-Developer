const value1 = prompt('Ingrese su primer número', '');
const value2 = prompt('Ingrese su segundo número', '');

const sum = parseInt(value1) + parseInt(value2);

/* parseInt convierte el dato a un número entero. */

const product = value1 * value2; /* No lleva parseInt porque no concatena, no es necesario. */

console.log(sum);
console.log(product);

