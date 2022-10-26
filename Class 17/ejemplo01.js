const items = document.getElementsByClassName('item');

function changevisibility() {
    const item = items[2];
    if(item.style.visibility == 0){
        item.style.visibility = 'hidden'
    } else {
        item.style.visibility = ''
    }
}

setInterval(changevisibility, 500); /* Half a second */