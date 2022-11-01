/* EJERCICIO 02 */

/* Resolution 01 */

const distance = parseInt(prompt('Ingrese una distancia', ''));

/* if (Number.isNaN(distance)) {
    document.write('Debe ingresar una distancia válida.')
} else if (distance > 0 && distance <= 1000) {
    document.write('El modo de transporte más viable es a pie.');
} else if (distance > 1000 && distance <= 10000) {
    document.write('El modo de transporte más viable es la bicicleta.');
} else if (distance > 10000 && distance <= 30000) {
    document.write('El modo de transporte más viable es el colectivo.');
} else if (distance > 30000 && distance <= 100000) {
    document.write('El modo de transporte más viable es el auto.');
} else {
    document.write('El modo de transporte más viable es el avión.');
} */

/* Resolution 02 */

let transport = '';

if (Number.isNaN(distance) || distance <= 0) {
    document.write('Debe ingresar una distancia válida.')
} else if (distance > 0 && distance <= 1000) {
    transport = 'pie';
} else if (distance > 1000 && distance <= 10000) {
    transport = 'bicicleta';
} else if (distance > 10000 && distance <= 30000) {
    transport = 'colectivo';
} else if (distance > 30000 && distance <= 100000) {
    transport = 'auto';
} else {
    transport = 'avión';
}

document.write(`El medio de transporte más adeucado para recorrer ${distance} metros es ${transport}.`);