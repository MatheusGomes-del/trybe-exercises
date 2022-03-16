const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];
  
function containsA(array) {
    // escreva seu código aqui
    return array.reduce((acc, nomes) => {
        for(const  letter of nomes){
            if( letter === 'a' || letter === 'A'){
                acc += 1
            }
        }
        return acc
},0)
}

console.log(containsA(names))