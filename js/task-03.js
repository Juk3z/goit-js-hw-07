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

const listEl = document.querySelector('#gallery')

function makingList(array) {

  array.forEach(element => {
    const item = listEl.insertAdjacentHTML('beforeend', `<li  style='list-style: none'><img src='${element.url}' alt='${element.alt}' class='img'></img></li>`)  
    });

// cстили  списка
    listEl.style.padding = '0'
    listEl.style.display = 'flex'
    listEl.style.justifyContent = 'space-around'
  
  // стили img  
  const imgEl = listEl.querySelectorAll('.img');
  imgEl.forEach(item => {
    item.style.display = 'block'
    item.style.maxWidth = 'auto%'
    item.style.maxHeight = '300px'
  })
    

};




makingList(images);


