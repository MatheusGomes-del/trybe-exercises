const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(alunos, notas) {
  // escreva seu código aqui
  const student = alunos.map((name, indice) => {
    const notes = notas[indice].reduce((acc, nota) =>  acc = acc + nota,0)
    const media = notes / notas[indice].length
    return {
     name, average: media,
   }
  })
  return student
}
console.log(studentAverage(students,grades))
