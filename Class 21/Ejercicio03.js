/* 01. Generar ingreso de números del usuario. Reemplaza el punto 02. */

const numbers = [];
for(let i= 0;i<5;i++){
    const num = parseInt(prompt('Ingrese un número', ''))
    numbers[i] = num;
}

/* 02. Generar variable con números. */

/* const numberarray = [100, 56, 1245, 3, 89, 9]; */

/* 03. Generar una variable para guardar el número contra el que se va a comparar el array. */

var highest = 0;

/* 04. Generar el recorrido del array. */

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > highest) {
        highest = numbers[i];
    }
}

document.write(`El mayor de ${numbers} es ${highest}.`);