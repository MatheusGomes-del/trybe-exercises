//2.1
const factorial = numero => {
    let resultado = 1

    for(let i = 2 ; i <=numero; i++){
        console.log(i)
        resultado *= i
        console.log(resultado)
    }
   return resultado
}

console.log(factorial(4))