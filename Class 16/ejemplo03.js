const button = document.getElementById('button');

button.addEventListener('click', function (e){
    alert(e.currentTarget.innerText)
})