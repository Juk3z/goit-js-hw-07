const itemsEl = document.querySelectorAll('.item')

const getItemsLength = function (array) {
    console.log(`В списке ${array.length} категории`)
};



const getCategoryName = function (array) {
    array.forEach(element => {
        const categoryNameEl = element.querySelector('h2').textContent;
        const categoryNumbersEl = element.querySelectorAll('li').length;
        console.log(`Категория: ${categoryNameEl}`);
        console.log(`Количество элементов: ${categoryNumbersEl}`)
        
    
    })
}

getItemsLength(itemsEl);

getCategoryName(itemsEl);