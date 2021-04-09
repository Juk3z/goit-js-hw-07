const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');



function fontScaling(event) {
    textEl.style.fontSize = `${event.target.value}px`
}

inputEl.addEventListener('input', fontScaling)