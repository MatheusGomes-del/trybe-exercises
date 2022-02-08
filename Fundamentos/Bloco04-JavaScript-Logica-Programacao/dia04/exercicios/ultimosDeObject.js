//6° Sexto
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
let fullName = leitor.nome + ' ' + leitor.sobrenome
console.log(`O livro favorito de ${fullName} se chama ${leitor.livrosFavoritos[0].titulo} `)

//7° Exercicio
leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
})
//8° Oitavo
console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} favoritos`)