/* Alt gr + ] + Spacebar = ` */

const num1 = parseInt(prompt('Ingrese el primer número', '')); /* 20 */
const num2 = parseInt(prompt('Ingrese el segundo número', '')); /* 10 */
const num3 = parseInt(prompt('Ingrese el tercer número', ''));  /* 5 */

if(num1 > num2 && num1 > num3) {
    document.write(`El mayor número es ${num1}`);
}

else if(num2 > num3) {
    document.write(`El mayor número es ${num2}`);
}

else {
    document.write(`El mayor número es ${num3}`);
}