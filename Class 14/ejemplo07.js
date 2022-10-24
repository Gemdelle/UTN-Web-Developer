/* Determinar la variable que corresponderá al número, cantidad total y suma. */

let x = 1;
const quantity = 5;
let sum = 0;

while(x <= quantity) {
    const value = parseInt(prompt(`Ingrese el valor ${x} de ${quantity}`, ''));
    sum += value;
    x++
}

document.write(sum + '<br/>');
document.write(`La suma de los valores es ${sum}.`);

