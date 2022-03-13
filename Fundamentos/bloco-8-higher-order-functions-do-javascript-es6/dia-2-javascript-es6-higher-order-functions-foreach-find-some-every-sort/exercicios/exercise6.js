const books = require('./exercise1')

const releaseYear = (objeto) => {
    let isTrue = false
    let libray = objeto.some((book) => {
        if(book.releaseYear >= 1980 && book.releaseYear <= 1989){
           return isTrue = true
        }else{
            return isTrue
        }
    })
    return libray
}

console.log(releaseYear(books))