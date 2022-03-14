const books = require("./exercise1");

const ageAuthor = (objeto) => {
  let array = objeto.map((element) => {
    let nameAuthor = element.author.name;
    let ageAuthor = element.releaseYear - element.author.birthYear;
    return { age: ageAuthor, author: nameAuthor };
  });
  let ordenateArray = array.sort((a, b) => a.age - b.age);
  return ordenateArray;
};

console.log(ageAuthor(books));
