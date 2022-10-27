/* Greet according to time of the day. */

const names = prompt('Ingrese su nombre', '');
const today = new Date();
const hrs = today.getHours();

if (hrs < 12) {
    document.write(`Buenos días ${names}`);
} else if (hrs >= 12 && hrs <= 18) {
    document.write(`Buenas tardes ${names}`);
} else {
    document.write(`Buenas noches ${names}`);
}