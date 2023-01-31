/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:


- Crie uma função que irá calcular a média das notas de cada aluno
- Supondo que a média, para esse concurso é 7, verifique se cada aluno obteve sucesso
ou não em entrar no concurso e mostre uma mensagem na tela. 

*/

const students = [
  {
    name: "Marieli",
    noteOne: 8,
    noteTwo: 9
  },
  {
    name: "Filipe",
    noteOne: 10,
    noteTwo: 5
  },
  {
    name: "Pablo",
    noteOne: 7,
    noteTwo: 6
  },
  {
    name: "Maria",
    noteOne: 4,
    noteTwo: 3
  },
  {
    name: "João",
    noteOne: 7,
    noteTwo: 5
  },
]

console.log(students.name)

function calculateAverage(student){
  let averange = ((student.noteOne + student.noteTwo) / 2)

  if(averange >= 7){
    alert(` ${student.name}, a sua média foi: ${averange}.
    Parabéns! Você foi aprovado(a) no concurso!`)
  } else {
    alert(` ${student.name}, a sua média foi: ${averange}.
   Você não foi aprovado (a) no concurso. Não desista! Tente novamente!`)
  }

}

for (let student of students){
  calculateAverage(student)
}