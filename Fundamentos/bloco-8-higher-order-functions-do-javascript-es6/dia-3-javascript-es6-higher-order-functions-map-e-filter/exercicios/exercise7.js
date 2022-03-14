const books = require('./exercise1')

const authorWith3DotsOnName = (objeto) => {
    // escreva seu código aqui
    let nameBook = objeto.filter((names) => {
      if(names.author.name[1] === '.' && names.author.name[4] === '.'
      && names.author.name[7] === '.' ){
        console.log(names.name)
      }
    })
    return nameBook
}

console.log(authorWith3DotsOnName(books))