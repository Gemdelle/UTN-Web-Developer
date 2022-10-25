/* addEventListener to prevent actions. */

const link = document.getElementById('link');

link.addEventListener('click', function(e){
    e.preventDefault(); /* Stop event and show following warning. */
    alert('You attempted to visit: ' + e.currentTarget.href);
})

