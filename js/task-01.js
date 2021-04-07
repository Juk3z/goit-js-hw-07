const items = document.querySelectorAll('.item')

const getItemsLength = function (array) {
    console.log(`В списке ${array.length} категории`)
};



const getCategoryName = function (array) {
    array.forEach(element => {
        const categoryName = element.querySelector('h2').textContent;
        const categoryNumbers = element.querySelectorAll('li').length;
        console.log(`Категория: ${categoryName}`);
        console.log(`Количество элементов: ${categoryNumbers}`)
        
    
    })
}

getItemsLength(items);

getCategoryName(items);