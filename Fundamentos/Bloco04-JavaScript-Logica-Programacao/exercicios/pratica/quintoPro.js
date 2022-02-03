const primeiroAngulo = 60
const segundoAngulo = 60
const terceiroAngulo = -60

let somaAngulos = primeiroAngulo + segundoAngulo + terceiroAngulo
console.log(somaAngulos)

if(somaAngulos === 180){
    console.log(true)
}else if(somaAngulos < 0){
    console.log('[error]Um ângulo é inválido')
}else{
    console.log(false)
}