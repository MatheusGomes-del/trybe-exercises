const books = require('./exercise1')


const equalBorn = (objeto) => {
    let isTrue = false
    let result = objeto.some((born) => {
       if(born.author.birthYear === born.author.birthYear){
         return isTrue = true
       }else{
           return isTrue
       }
       
    })
    return result
}

console.log(equalBorn(books))