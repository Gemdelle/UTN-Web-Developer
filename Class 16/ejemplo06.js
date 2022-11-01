const alternate = document.getElementsByClassName('alternate')[0]; /* Works for the first button (since there is only 1). */

alternate.addEventListener('click', function(e){
    e.currentTarget.classList.toggle('active');
})

/* classList > Represents a list of classes asignes to the element.

toggle > change a class.
add > add a class.
remove > remove one or + classes.
*/