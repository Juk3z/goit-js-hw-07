const inputEl = document.querySelector('#name-input');
const titleEl = document.querySelector('#name-output');
console.log(inputEl);
console.log(titleEl);

function nameChecker() {
    if (!inputEl.value) {
        titleEl.textContent = 'Незнакомец';
        return
    }
    titleEl.textContent = inputEl.value;
};

inputEl.addEventListener('input', nameChecker)