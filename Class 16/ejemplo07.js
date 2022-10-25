const square = document.getElementsByClassName('box')[0];
const red = document.getElementById('red');
const border = document.getElementById('border');
const reset = document.getElementById('reset');

red.addEventListener('click', function(){
    square.classList.add('red');
})

border.addEventListener('click', function(){
    square.classList.add('border');
})

reset.addEventListener('click', function(){
    square.classList.remove('red', 'border');
})