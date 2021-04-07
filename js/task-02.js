const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients')



function makingList(array) {
        array.forEach(element => {
            const listItem = document.createElement('li');
            listItem.textContent = element;
            list.appendChild(listItem);
    });

};


makingList(ingredients);
