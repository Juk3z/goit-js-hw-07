const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('#ingredients')



function makingList(array) {
        array.forEach(element => {
            const listItemEl = document.createElement('li');
            listItemEl.textContent = element;
            listEl.appendChild(listItemEl);
    });

};


makingList(ingredients);
