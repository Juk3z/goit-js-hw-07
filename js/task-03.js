const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector('#gallery')

function makingList(array) {

    array.forEach(element => {
        const liItem = document.createElement('li');
        const itemImg = document.createElement('img');
        itemImg.setAttribute('src', element.url);
        itemImg.setAttribute('alt', element.alt);
// стили элементов списка
        liItem.style.listStyle = 'none'
        itemImg.style.display = 'block'
        itemImg.style.maxWidth = 'auto%'
        itemImg.style.maxHeight = '300px'
// добавление в документ    
        liItem.append(itemImg);
        list.appendChild(liItem);
    });

// cстили  списка
    list.style.padding = '0'
    list.style.display = 'flex'
    list.style.justifyContent = 'space-around'

};



makingList(images)
