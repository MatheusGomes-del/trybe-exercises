//1° Exercicio
 
 function mudaCor(elemento, cor){
    let paragrafo = document.getElementsByTagName(elemento)[1].style.backgroundColor = cor
    return paragrafo
}

console.log(mudaCor('p', 'blue'))

//2° Exercicio 

function corQuadrado(elemento, cor){
    let square = document.getElementsByClassName(elemento)[0]
    let square2 = square.style.background = cor
    return square2
}

console.log(corQuadrado('main-content', 'rgb(76,164,109)'))


//3° Exercicio

function changeColor(element, cor){
    let square = document.getElementsByClassName(element)[0]
    square.style.background = cor
    return square
}

console.log(changeColor('center-content', 'white'))

//4° Exercicio

function correctText(text){
   let texto = document.getElementsByClassName('title')[0].innerText = text 
   return texto
}

console.log(correctText('Teste de mudança no texto'))

//5° Exercicio

function changeUpper(element){
    let texto = document.getElementsByTagName(element)[0].style.textTransform = 'uppercase'
    return texto
}

console.log(changeUpper('p'))

//6° Exercicio

 function showContent(element){
    
    let content = document.getElementsByTagName(element)
    let show = []
    for(let i = 0; i < content.length; i++){
        show.push(content[i].innerHTML)
    }
    return show
}

console.log(showContent('p')) 