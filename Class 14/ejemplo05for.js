/* for(inicialización; condición; actualización) */

for(let f=1; f<10; f++) {
    document.write(f + "<br/>")
}

/* El br hace que quede de forma vertical */
/* Si en vez de let fuera CONST, no funcionaría porque no puede variarse. var sí funcionaría. */

let x = 1;

while(x <= 100) {
    document.write(`${x} <br/>`);
    x++; /* x = x + 2 */
}