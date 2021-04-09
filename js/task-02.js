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
  const newList = [];
  array.forEach(element => {
    const listItemEl = document.createElement('li');
    listItemEl.textContent = element;

    newList.push(listItemEl);
  });

  listEl.append(...newList);

};


makingList(ingredients);
