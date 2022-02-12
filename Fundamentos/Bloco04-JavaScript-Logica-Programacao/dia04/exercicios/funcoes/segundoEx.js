function maiorValor(array){
    let indice 
    let count = 0
    for(let i = 0; i < array.length; i++){
      if(array[i] > count){
          count = array[i]
          indice = array.indexOf(count)
      }
    }
    return indice
}

console.log(maiorValor([2, 3, 6, 7, 10, 1]))