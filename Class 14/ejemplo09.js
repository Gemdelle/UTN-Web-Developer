function validatelength(text, requiredlength) {
    return text.length >= requiredlength;
}

function validateform() {
    const validName = true;
    const validPassword = validatelength(document.form1.text1.value, 5);

    const result = validName && validPassword;
    if(result) {
        alert('Es válido.')
    } else {
        alert('NO es válido.')
    }
}