const btnPlusEl = document.querySelector(`button[data-action='increment']`);
const btnMinusEl = document.querySelector(`button[data-action='decrement']`);
const valueEl = document.querySelector('#value');


let value = 0;

function increment() {
    valueEl.textContent = ++value;
};

function decrement() {
    valueEl.textContent = --value;
};



btnPlusEl.addEventListener('click', increment);
btnMinusEl.addEventListener('click', decrement);

