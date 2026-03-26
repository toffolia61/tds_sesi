const aluno = {
    nome: "Alex",
    idade: 15,
    curso: "Desenvolvimento de Sistemas"
}

console.log(aluno);
console.log(aluno.nome); // mais usado
console.log(aluno["idade"]);

aluno.matricula = "2025A";  // adicionar
aluno.idade = 18; // alterar

delete aluno.curso; // remover

console.log(aluno);
