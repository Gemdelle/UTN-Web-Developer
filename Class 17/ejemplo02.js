const message = document.getElementById('message');

function changevisibility(){
    if(message.style.visibility == 0) {
        message.style.visibility = 'hidden';
    } else {
        message.style.visibility = '';
    }
}

function hidemessage(){
    message.style.display = 'none';
}

setInterval(changevisibility, 500); /* 0.5 seconds */
setTimeout(hidemessage, 5000); /* 5 seconds. */