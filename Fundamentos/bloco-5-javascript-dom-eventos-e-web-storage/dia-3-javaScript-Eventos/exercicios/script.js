function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];



function createDays(array){
    let ul = document.getElementById('days')
     
    for(let i = 0 ; i < array.length; i++){
        let elements = array[i]
        let li = document.createElement('li')
        li.className = 'day'
        li.innerText = elements
        ul.appendChild(li)

        if(elements == 24 || elements == 31){
            li.className = ' day holiday'
        }else if(elements == 4 || elements == 11 || elements == 18){
            li.className = ' day friday'
        }else if(elements == 25)[
            li.className = 'day holiday friday'
        ]
    }

}
console.log(createDays(dezDaysList))