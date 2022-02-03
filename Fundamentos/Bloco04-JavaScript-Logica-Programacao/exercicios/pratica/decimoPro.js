const custoProduto =  120
const valorVenda = 200
const imposto = 0.2 
let custoTotal = (imposto * custoProduto) + custoProduto

const lucro = valorVenda - custoProduto


if(custoProduto == 0 || valorVenda == 0){
    console.log('[error] Valor Inválido')
}else{
    console.log(`Se a empresa vender mil produtos de ${lucro} terá um lucro total de ${lucro * 1000}`)
}