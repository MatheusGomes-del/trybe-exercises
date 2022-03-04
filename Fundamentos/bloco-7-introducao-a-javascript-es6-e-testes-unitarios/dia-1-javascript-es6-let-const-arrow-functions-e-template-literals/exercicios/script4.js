//2.2

const biggestWord = str => {
    
    let biggestStr = ''
    let string = str.split(" ")
     
    for(let i = 0; i < string.length; i++){
        if(string[i].length > biggestStr.length){
            biggestStr = string[i]
        }
    }
    return biggestStr
}

console.log(biggestWord('Antônio foi no banheiro e não sabemos o que aconteceu'))