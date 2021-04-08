const btnPlusEl = document.querySelector(`button[data-action='increment']`);
const btnMinusEl = document.querySelector(`button[data-action='decrement']`);
const valueEl = document.querySelector('#value');




function increment(event) {
    valueEl.textContent = Number(valueEl.textContent) + 1;
};

function decrement(event) {
    valueEl.textContent = Number(valueEl.textContent) - 1;
}



btnPlusEl.addEventListener('click', increment);
btnMinusEl.addEventListener('click', decrement);

