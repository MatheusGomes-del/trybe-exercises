function maiorCaractere(array){
    let maiorPalavra = ''
    
    for(let i = 0 ; i < array.length; i++){
       if(array[i].length > maiorPalavra.length){
           maiorPalavra = array[i]
       }
    }
    return maiorPalavra
}

console.log(maiorCaractere(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))
console.log(maiorCaractere(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', 'juliocesarprimeiro']))