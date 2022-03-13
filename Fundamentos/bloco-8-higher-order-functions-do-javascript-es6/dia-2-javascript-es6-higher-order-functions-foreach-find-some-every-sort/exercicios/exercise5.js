const books = require('./exercise1')

let expectedResult = false;

function everyoneWasBornOnSecXX(objeto) {
  // escreva seu código aqui
   return objeto.every((element) => {
     if(element.author.birthYear > 1900){
       expectedResult = true
       return expectedResult
     }else{
       return expectedResult
     }
  })
}

console.log(everyoneWasBornOnSecXX(books))