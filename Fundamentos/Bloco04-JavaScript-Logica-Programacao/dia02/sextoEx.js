let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumbers = []

for(let i = 0 ; i < numbers.length; i++){
    if(numbers[i] % 2 == 1){
       oddNumbers.push(numbers[i])
    }else{
        console.log('Nenhum valor ímpar encontrado')
    }
}

console.log(oddNumbers)