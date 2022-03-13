const books = require('./exercise1')

const expectedResult = {
    author: {
      birthYear: 1948,
      name: 'George R. R. Martin',
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991,
  }; 

function getNamedBook(array) {
    // escreva seu código aqui
    array.find((element) => {
       if(element.name.length === 26){
           console.log(element.name)
       }
    })
}

getNamedBook(books)