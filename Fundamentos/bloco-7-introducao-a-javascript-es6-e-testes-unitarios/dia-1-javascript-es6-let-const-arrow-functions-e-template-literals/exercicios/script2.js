//1.2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
// referencia : https://www.javascripttutorial.net/javascript-array-sort/
const organizeArray = array => array.sort((a, b) => a - b)

console.log(` Os números ${organizeArray(oddsAndEvens)} se encontram ordenados de forma crescente!`)