function isPalindromo(parametro){
    let separete = parametro.split("")
    let reverse = separete.reverse()
    let palindromo = false
    if(reverse.join("") === parametro){
        palindromo = true
    }else{
        palindromo = false
    }
    return palindromo
}

console.log(isPalindromo('matheus'))
console.log(isPalindromo('asa'))