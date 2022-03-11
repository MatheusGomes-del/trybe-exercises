//desenvolver uma hof que retorne como resultado um sorteio
//a hof gera um numero aleatoria entre 1 e 5
//recebe como parâmetro o número apostado
//checa e o número apostado é igual ao número sorteado
//seu retorno deve ser uma string = "Tente novamente" ou "Parabéns você ganhou"


const checkNumber = (number, randomNumber) => {
    if(number === randomNumber){
        return "Parabéns você ganhou"
    }else{
        return "Tente novamente"
    }
}
const showResult = (number, funcao) => {
    const randomNumber = Math.floor((Math.random() * 5) + 1);
    console.log(randomNumber)
    return funcao(number, randomNumber)
}

console.log(showResult(2, checkNumber))