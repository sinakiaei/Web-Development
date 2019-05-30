var inputName = document.getElementById('input-name');
var inputMail = document.getElementById('input-mail');
var inputMessage = document.getElementById('input-message');
var button = document.querySelector('.submit-button');
var regEX = /\S+@\S+\.\S+/;
var form = document.querySelector('.form');

function checkInput() {
    if (inputName.value.trim() !== "" && regEX.test(inputMail.value) && inputMessage.value.trim() !== "" ) {
        button.style.background = '#fa923f';
        button.disabled = false;
    } else {
        button.style.background = '#979695';
        button.disabled = true;
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Submitted');
})