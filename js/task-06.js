const inputEl = document.querySelector('#validation-input');
console.log(inputEl);

function inputValidation(event) {
    if (event.target.value.length < event.target.dataset.length) {
        inputEl.classList.add('invalid')
        inputEl.classList.contains('valid') ? inputEl.classList.remove('valid') : false;

    };

    if (event.target.value.length >= event.target.dataset.length) { 
        inputEl.classList.add('valid')
        inputEl.classList.contains('invalid') ? inputEl.classList.remove('invalid') : false;
    };

};

inputEl.addEventListener('blur', inputValidation);