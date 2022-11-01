const text = document.getElementById('text');
const counter = document.getElementById('counter');

text.addEventListener('keyup', function(){
    counter.innerText = text.value.length;
})