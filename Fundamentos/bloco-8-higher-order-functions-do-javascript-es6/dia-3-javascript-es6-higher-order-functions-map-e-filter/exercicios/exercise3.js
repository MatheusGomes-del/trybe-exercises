const books = require("./exercise1");

function fantasyOrScienceFiction(objeto) {
  // escreva seu código aqui
  let genre = objeto.filter((books) => {
    if (books.genre === "Ficção Científica" || books.genre === "Fantasia") {
      return books;
    }
  });
  return genre;
}

console.log(fantasyOrScienceFiction(books));
