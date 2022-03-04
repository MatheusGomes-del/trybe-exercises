//2.4 

const changeLetterBySomething = (str, key)=> {
    
    let array = str.split(' ')

    array.forEach((x, i) => array[i] = x.replace('x', key));
    return array.join(' ')
}


console.log(changeLetterBySomething('As cronicas de x', 'matheus')) 
