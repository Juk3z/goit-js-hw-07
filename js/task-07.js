const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');



function test(event) {
    textEl.style.fontSize = `${event.target.value}px`
}

inputEl.addEventListener('input', test)