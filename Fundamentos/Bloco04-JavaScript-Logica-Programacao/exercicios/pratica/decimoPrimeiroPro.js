const salarioBruto = 3000
var aliquotaInss
var aliquotaIr
var parcela 

if(salarioBruto <= 1556.94){
     var aliquotaInss = 0.08
}else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    var aliquotaInss = 0.09
}else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    var aliquotaInss = 0.11
}else{
    var aliquotaInss = 570.88
}
let desconto = aliquotaInss * salarioBruto
const salarioBase = salarioBruto - desconto
console.log(salarioBase)

if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
    var aliquotaIr = 0.075
    var parcela = 142.80
}else if(salarioBase >= 2826.66 && salarioBase <= 3751.05){
    var aliquotaIr = 0.15
    var parcela = 354.80
}else if(salarioBase >= 3751.05 && salarioBase <= 4664.68){
    var aliquotaIr = 0.225
    var parcela = 636.13
}else{
    var aliquotaIr = 0.275
    var parcela = 869.36
}

const descontoIr = (aliquotaIr * salarioBase) - parcela
const salarioLiquido = salarioBase - descontoIr
console.log(salarioLiquido)