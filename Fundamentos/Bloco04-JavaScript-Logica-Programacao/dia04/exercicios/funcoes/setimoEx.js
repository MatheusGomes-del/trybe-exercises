function comparaFinal(stringWord, stringEnding){
    
    let equal = false

    let primeiraString = stringWord.split('')
    let segundaString = stringEnding.split('')

    if(segundaString[0] && segundaString[1] === primeiraString[primeiraString.length - 1] && primeiraString[primeiraString.length - 2]){
        equal = true
    }else{
        equal = false
    }
    return equal
}

console.log(comparaFinal('trybe', 'be'))