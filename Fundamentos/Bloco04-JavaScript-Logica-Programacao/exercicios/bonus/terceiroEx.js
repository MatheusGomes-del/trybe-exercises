let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numberMulti = []
let count = 0

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        console.log(numbers[secondIndex]);
        count =  numbers[index] * numbers[secondIndex]
        numberMulti.push(count)
    }
    
  }

  console.log(numberMulti)