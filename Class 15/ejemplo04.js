/* Select all paragraphs. 
01. Usar querySelectorAll
02. Usar getElementsByTagName*/

/* CHECK: To check code, use console.log in function and call function by its name outside the definition, e.g. allparagraphs(). */

function allparagraphs() {
    const allparagraphs = document.querySelectorAll('p');
    console.log(allparagraphs);

    const num = allparagraphs.length;
    alert(`There are ${num} <p> elements in this document.`);

    /* alert(`The number of p is ' + allparagraphs.length.`); */
}

/* Blue box p. */

function paragraphsbox01() {
    const box01 = document.getElementById('box01');
    const box1paragraphs = box01.getElementsByTagName('p');

    console.log(box01);
    console.log(box1paragraphs);

    const num = box1paragraphs.length;
    alert(`There are ${num} <p> elements in this document.`);
}

/* Red box p. */

function paragraphsbox02(){
    const box02paragraphs = document.querySelectorAll('#box02 p'); /* Faster because it uses only 1 line. */
    console.log(box02paragraphs); /* Only for checking, need to add the function name outside function definition. */

    const num = box02paragraphs.length;

    alert(`There are ${num} <p> elements in this document.`);
}