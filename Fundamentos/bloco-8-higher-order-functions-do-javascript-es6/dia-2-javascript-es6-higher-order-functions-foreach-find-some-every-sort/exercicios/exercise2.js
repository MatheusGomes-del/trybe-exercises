const books = require('./exercise1')

function smallerName(array) {
    let nameBook;
    // escreva aqui o seu código
    array.forEach((element) => {
        if(!nameBook || element.name.length < nameBook.length){
            nameBook = element.name
        }
    })
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook; 
}

console.log(smallerName(books))