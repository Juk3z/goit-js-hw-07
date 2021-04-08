const controlsEl = document.querySelector('#controls');
const inputValueEl = document.querySelector('input');
const btnCreateEl = document.querySelector('button[data-action="render"]');
const btnDestroyEl = document.querySelector('button[data-action="destroy"]');
const boxesEl = document.querySelector('#boxes');


function createBoxes() {
    boxesEl.innerHTML = '';

    const getRandomInt = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
    };
    

    let sizeBoxes = 30;

    for (let x = 0; x < inputValueEl.value; x++) {
        const y = document.createElement('div');
        
        
        const red = getRandomInt(255);
        const green = getRandomInt(255);
        const blue = getRandomInt(255);


        y.style.width = `${sizeBoxes}px`;
        y.style.height = `${sizeBoxes}px`;
        y.style.backgroundColor = `rgb(${red},${green},${blue})`;
        y.style.margin = '10px';

        sizeBoxes += 10;
        boxesEl.appendChild(y);

        
        
        
    };
};

function destroyBoxes() {
    boxesEl.innerHTML = '';
}




btnDestroyEl.addEventListener('click', destroyBoxes);
btnCreateEl.addEventListener('click', createBoxes);