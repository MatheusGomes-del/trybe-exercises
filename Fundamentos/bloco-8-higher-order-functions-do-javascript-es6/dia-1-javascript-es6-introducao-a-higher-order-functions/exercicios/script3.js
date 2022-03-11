const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const hits = (rigthAnswers,StudentAnswers, callback ) => {
    let totalPoints = 0
    
     rigthAnswers.forEach((anwser, indice) => {
        let returnFunc = callback(anwser, StudentAnswers[indice])
        totalPoints += returnFunc
    })
    return totalPoints
}


const compareArrays = (primeiroArray, segundoArray) => {
    if(primeiroArray === segundoArray){
        return 1
    }else if(segundoArray === 'N.A'){
        return 0
    }else{
        return 0.5
    }
}

console.log(hits(RIGHT_ANSWERS, STUDENT_ANSWERS, compareArrays))
