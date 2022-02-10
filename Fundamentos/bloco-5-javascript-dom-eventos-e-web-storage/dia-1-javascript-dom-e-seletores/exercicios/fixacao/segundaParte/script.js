function makeHeader(){
    let titulo = document.querySelector('h1')
    let header = document.querySelector('header')
    header.style.margin = 0
    header.style.padding = 0
    titulo.innerHTML = 'Adminstrador do Tempo da Trybe'
    titulo.style.color = 'white'
    titulo.style.background = 'rgb(76,164,109)'
}
makeHeader() 

function makeSectionEmergency(){
    let emergency = document.querySelectorAll('.emergency-tasks h3')
    let backemergency = document.querySelector('.emergency-tasks')
    backemergency.style.background = 'pink'
    emergency[0].style.background = 'purple'
    emergency[1].style.background = 'purple'
     
}
makeSectionEmergency()

function makeNoEmergency(){
    let noEmergency = document.querySelectorAll('.no-emergency-tasks h3')
    let backNoEmergency = document.querySelector('.no-emergency-tasks')
    backNoEmergency.style.background = 'yellow'

    for(let tag in noEmergency){
        let tagStyle = noEmergency[tag]
        tagStyle.style.background = 'black'
    }
}
makeNoEmergency()