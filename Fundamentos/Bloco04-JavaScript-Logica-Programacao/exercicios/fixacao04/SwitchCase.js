let avaliacao = 'lista'

switch(avaliacao){
    case 'aprovada':
        console.log('Parabéns, você foi aprovada(o)')
        break;
    
    case 'reprovada':
        console.log('Que pena, Você foi reprovada(o)')
        break;

    case 'lista':
        console.log('Você está na nossa lista de espera')
        break;

    default:
        console.log('não se aplica')
}
