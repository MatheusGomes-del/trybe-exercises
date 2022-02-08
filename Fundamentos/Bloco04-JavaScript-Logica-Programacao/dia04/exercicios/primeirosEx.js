//1° Exercicio
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

 console.log(`Bem vinda, ${info.personagem}`) 

//2° Exercicio
info['recorrente'] = 'Sim'
console.log(info) 

//3° Exercicio

 for(let key in info){
    console.log(key)
} 

//4° Exercicio

for(let key in info){
    console.log(info[key])
}

//5° Exercicio
let secondObejct = {
    personagem:'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}

for(let caracteristica in info){
    if(caracteristica === 'recorrente' && info[caracteristica] === 'Sim' && secondObejct[caracteristica] === 'Sim'){
        console.log('Ambos recorrentes')
    }else{
        console.log(info[caracteristica] + " e "  + secondObejct[caracteristica])
    }
    
}
 

