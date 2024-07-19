// Questão 02

function boasVindasAda() {
  var nomeUsuario = prompt("Por favor digite seu nome:");
  if (nomeUsuario) {
      alert(`Seja bem-vindo, ${nomeUsuario }!`);
  } else {
      alert("Nome não fornecido!");
  }
}

boasVindasAda();


// Questao 03

function verificarNota() {
  var nomeCliente = prompt("Por favor digite seu nome:");
  var nota = prompt("Por favor digite sua nota:");

  if (isNaN(nota) || nota === "") {
      console.log("Nota inválida! Por favor, insira um número.");
  } else {
      nota = parseFloat(nota);
      if (nota >= 8) {
          console.log(`Parabéns!!! ${nomeCliente} , você foi aprovado!!!`);
      } else {
          console.log(`Olá ${nomeCliente}! Infelizmente você foi reprovado, não fique triste,logo você poderá tentar novamente.`);
      }
  }
}

verificarNota();

// Questão 04

function chamarNumero() {
  for (var i = 1; i <= 100; i++) {
      console.log(i);
      if (i % 5 === 0) {
          console.log("Ada");
      }
  }
}
chamarNumero();


//Questão 05

function bingoAda() {
  var cartela = [11, 28, 35, 74, 26, 17];
  var sorteados = [];
  
  while (cartela.length > 0) {
      var numeroSorte = Math.floor(Math.random() * 75) + 1;
      if (!sorteados.includes(numeroSorte)) {
          sorteados.push(numeroSorte);
          console.log(`Número sorteado: ${numeroSorte}`);
          if (cartela.includes(numeroSorte)) {
              cartela.splice(cartela.indexOf(numeroSorte), 1);
          }
      }
  }
  
  console.log("Parabéns, você ganhou!!!");
}

bingoAda();

//Questão 05

var alunos = [
  { nome: 'Pedro Andrade', turma: 'Ada', idade: 22 },
  { nome: 'Alessandro Ferreira', turma: 'Ada', idade: 32 },
  { nome: 'Ivirson Daltro', turma: 'Santander', idade: 33 },
  { nome: 'Tiago Tomé', turma: 'Ada', idade: 23 },
  { nome: 'Leidy Olinto', turma: 'Santander', idade: 33 },
  { nome: 'PatrickLima', turma: 'Santander', idade: 28 }
];

function alunoMaisVelhoTurmaAda() {
  var maisVelho = null;
  for (var i = 0; i < alunos.length; i++) {
      if (alunos[i].turma === 'Ada') {
          if (maisVelho === null || alunos[i].idade > maisVelho.idade) {
              maisVelho = alunos[i];
          }
      }
  }
  return maisVelho;
}

function mediaIdadeAlunos() {
  var totalIdade = 0;
  for (var i = 0; i < alunos.length; i++) {
      totalIdade += alunos[i].idade;
  }
  var media = totalIdade / alunos.length;
  return media;
}

var maisVelhoA = alunoMaisVelhoTurmaAda();
console.log(`O aluno mais velho da turma Ada é ${maisVelhoA.nome}  com ${maisVelhoA.idade}  anos.`);

var mediaIdade = mediaIdadeAlunos();
console.log(`A média de idade de todos os alunos é  ${mediaIdade} anos.`);