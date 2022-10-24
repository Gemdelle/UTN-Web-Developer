const names = prompt('Ingrese su nombre', '');
const grade = parseInt(prompt('Ingrese su nota', ''));

/* console.log(names);
console.log(grade);
 */

if(Number.isNaN(grade)) {
    document.write('La nota ingresada no es válida.');
}

else if(grade >= 4) {
    document.write(`${names}, estás aprobado con un ${grade}.`);
}

else {
    document.write(`${names}, estás desaprobado con un ${grade}. Seguí estudiando.`);
}