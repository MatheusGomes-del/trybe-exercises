const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };


const addShift = (obj, chave, valor) => {obj[chave] = valor}

const showKeys =  obj => { return Object.keys(obj)}

const showLengthObject = obj => { return Object.keys(obj).length}

const showValues = obj => { return Object.values(obj)}

const allLessons = Object.assign({},{lesson1 ,lesson2,lesson3})

const showStundents = obj => {return obj.lesson1.numeroEstudantes + obj.lesson2.numeroEstudantes + obj.lesson3.numeroEstudantes}

const getKeys = (obj, indice) => { return Object.values(obj)[indice]}

const verifyKeyValue = (obj, key, value) => {
    
    const objeto = Object.entries(obj)
    let isTrue = false
    
     for(let i in objeto){
      //console.log(objeto[i])
      if(objeto[i][0] === key && objeto[i][1] === value){
        isTrue = true
      }
    } 
    return isTrue
}

console.log(addShift(lesson2,'turno', 'noite' ));
console.log(showKeys(lesson2));
console.log(showValues(lesson2))
console.log(showLengthObject(lesson2));
console.log(allLessons) 
console.log(showStundents(allLessons)) 
console.log(getKeys(lesson1, 0)) 
console.log(verifyKeyValue(lesson3, 'turno', 'noite'))