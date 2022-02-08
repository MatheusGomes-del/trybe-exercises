function somaTodos(inteiro){
    let soma = 0
    for(let i = 0; i <= inteiro; i++){
       soma += i 
    }
   return soma
}

console.log(somaTodos(5))