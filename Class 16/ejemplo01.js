/* Select all items. */

const items = document.getElementsByClassName('item');

/* Hides buttons but leaves white space. */
function changevisibility(numItem) {
    const item = items[numItem];
    if(item.style.visibility == '') {
        item.style.visibility = 'hidden';
    } else {
        item.style.visibility = '';
    }
}

/* Hides button and space it takes up. */
function changedisplay(numItem) {
    const item = items[numItem];
    if(item.style.display == '') {
        item.style.display = 'none';
    } else {
        item.style.display = '';
    }
}

