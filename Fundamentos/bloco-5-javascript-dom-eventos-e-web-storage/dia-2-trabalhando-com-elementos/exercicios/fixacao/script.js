//OBS: Comentar tudo para uma parte funcionar no console

//1°Parte
 let me = document.getElementById('elementoOndeVoceEsta') 

//2°Parte
 let meuPai = me.parentNode.style.background = 'blue' 

//3° Parte
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
let paragrafo = document.createElement('p')
paragrafo.innerHTML = 'texto de teste dinamico'
primeiroFilhoDoFilho.appendChild(paragrafo)

//4° Parte

 let pai = document.getElementById('pai').firstElementChild 

//5° Parte

  let me = document.getElementById('elementoOndeVoceEsta').previousElementSibling  

//6° Parte

 let me = document.getElementById('elementoOndeVoceEsta').parentNode.innerText  

//7° Parte

let me = document.getElementById('elementoOndeVoceEsta').parentElement.lastElementChild.previousElementSibling
console.log(me)

//8° Parte

let pai = document.getElementById('pai').lastElementChild.previousElementSibling
console.log(pai) 


//SEGUNDA PARTE DO EXERCICIO DE FIXACAO
//2.1 

let pai = document.getElementById('pai')
let irmao = document.createElement('section')
irmao.id = 'irmaoMaisNovo'
pai.appendChild(irmao)
console.log(pai)

//2.2
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta')
let novoFilho = document.createElement('section')
novoFilho.id = 'novoFilho'
elementoOndeVoceEsta.appendChild(novoFilho)
console.log(elementoOndeVoceEsta)

//2.3

 let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
let filhoDoPrimeiroFilho = document.createElement('section')
filhoDoPrimeiroFilho.id = 'filhoDoPrimeiroFilho'
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilho)
console.log(primeiroFilhoDoFilho)
 
//2.4

let terceiroFilho = filhoDoPrimeiroFilho.parentElement.parentNode.parentElement.lastElementChild.previousElementSibling.previousElementSibling
console.log(terceiroFilho)