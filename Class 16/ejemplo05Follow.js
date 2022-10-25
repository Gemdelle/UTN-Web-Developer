/* Build IDS */

const paragraph = document.getElementById('paragraph');
const minus = document.getElementById('minus');
const base = document.getElementById('base');
const plus = document.getElementById('plus');

/* Button functions */

minus.addEventListener('click', function() { /* Not necessary to put e between brackets because we have built the const paragraph. */
    paragraph.style.fontSize = '10px';
})

base.addEventListener('click', function() { /* Not necessary to put e between brackets because we have built the const paragraph. */
    paragraph.style.fontSize = '16px';
})

plus.addEventListener('click', function() { /* Not necessary to put e between brackets because we have built the const paragraph. */
    paragraph.style.fontSize = '30px';
})