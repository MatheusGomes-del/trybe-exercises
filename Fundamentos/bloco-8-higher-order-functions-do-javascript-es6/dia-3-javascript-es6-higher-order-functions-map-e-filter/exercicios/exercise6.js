const books = require('./exercise1')

const yearsRelease = (objeto) => {
    let year = new Date().getFullYear() - 60;
  
    let oldBooks = objeto
      .filter((books) => {
        if (books.releaseYear < year) {
          return books;
        }
      })
      .sort((a, b) => a.releaseYear - b.releaseYear);
  
    return oldBooks;
};

const  oldBooks = (objeto,yearsRelease) => {
    // escreva seu código aqui
    let names =  yearsRelease(objeto).map((element) => {
        return element.name
    }).reverse()
    return names
}

console.log(oldBooks(books, yearsRelease))