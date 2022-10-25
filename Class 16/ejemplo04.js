/* Complete the following fields before submitting the form. */

const form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    if(e.currentTarget.names.value == ''){
        alert('Please complete the field names');
        return;
    }

    if(e.currentTarget.message.value == ''){
        alert('Please complete the field message');
        return;
    }

    alert(`Thank you ${e.currentTarget.names.value} for the following message: ${e.currentTarget.message.value}.`);
})