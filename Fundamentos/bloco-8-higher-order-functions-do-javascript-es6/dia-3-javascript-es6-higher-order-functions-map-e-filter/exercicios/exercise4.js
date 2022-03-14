const books = require("./exercise1");

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

console.log(yearsRelease(books));
