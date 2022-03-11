//criar função que retorne um objeto no formato = {nomecompleto, email}
//passar função como parâmetro da hof newEmplyes, para criar cada pessoa com seu id
//a função deve receber o nome completo da pessoa funcionária e gerar um email no formato = nome_da_pessoa@trybe.com
// referencia do uso do replace para juntar strings : https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript

const newEmployees = (funcao) => {
  const employees = {
    id1: funcao("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: funcao("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: funcao("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

const hiredPerson = (nome) => {
  return { nome, email: `${nome.replace(/\s/g, "")}@trybe.com` };
};
console.log(newEmployees(hiredPerson));
