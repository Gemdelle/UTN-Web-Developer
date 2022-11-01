/* 01. Traer elementos del html. */

const body = document.getElementsByClassName('background');

const pink = document.getElementById('pink');
const brown = document.getElementById('brown');
const green = document.getElementById('green');

/* 02. Crear eventos para cada uno de los botones. */

pink.addEventListener('click', function(){
    background.classList.add('pink');
})

brown.addEventListener('click', function(){
    background.classList.add('brown');
})

green.addEventListener('click', function(){
    background.classList.add('green');
})