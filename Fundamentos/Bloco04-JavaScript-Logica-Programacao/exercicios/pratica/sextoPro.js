const value = 'Bispo'
const peca = value.toLowerCase()


switch (peca){
    case 'torre':
        console.log('Move-se pela vertical ou horizontal')
        break
    
    case 'cavalo':
        console.log('movimento em forma de L, duas casas sentido horizontal e mais uma vertical')
        break
    
    case 'bispo':
        console.log('move-se na diagonal')
        break

    case 'rainha':
        console.log('move-se em horizontal, diagonal e vertical')
        break

    case 'rei':
        console.log('horizontal, vertical, diagonal, somente uma casa por vez')
        break

    case 'peao':
        console.log('move-se uma casa para frente e caputura na diagonal')
        break

    default:
        console.log('[error] Nome Inválido, não é uma peça de xadrez')
}