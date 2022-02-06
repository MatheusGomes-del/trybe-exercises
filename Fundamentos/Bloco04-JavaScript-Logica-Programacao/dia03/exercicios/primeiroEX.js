let fatorialDez = []
let num = 0
let multi = 1

for(let i = 10; i > num; i-= 1){
    multi *= i
    fatorialDez.push(multi)
}
console.log(fatorialDez)