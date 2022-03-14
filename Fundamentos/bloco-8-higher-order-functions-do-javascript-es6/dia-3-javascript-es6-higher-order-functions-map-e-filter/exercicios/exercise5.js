const books = require("./exercise1");

const fantasyOrScienceFictionAuthors = (objeto) => {
  return objeto.map((names) => names.author.name).sort();
};

console.log(fantasyOrScienceFictionAuthors(books));
