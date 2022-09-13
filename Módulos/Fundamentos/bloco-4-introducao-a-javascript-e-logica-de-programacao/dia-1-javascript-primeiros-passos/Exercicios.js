// Exercício 1
const a = 10;
const b = 5;

console.log('Adição:' + (a + b));
console.log('Subtração:' + (a - b));
console.log('Multiplicação:' + (a * b));
console.log('Divisão:' + (a / b));
console.log('Módulo:' + (a % b));

// Exercício 2
if (a > b) {
    console.log('a é maior que b');
} else if (b > a) {
    console.log('b é maior que a');
} else {
    console.log('Eles são iguais');
}

// Exercício 3
const c = 14;

if (c > a && c > b) {
    console.log('c é o maior número');
} else if (b > a && b > c) {
    console.log('b é o maior número');
} else {
    console.log('a é o maior número');
}

// Exercício 4
let valorUm = 5;

if (valorUm > 0) {
    console.log('Positive');
} else if (valorUm < 0) {
    console.log('Negative');
} else {
    console.log('zero');
}

// Exercício 5

let ang1 =90;
let ang2 =60;
let ang3 =30;

let somaDosAngulos = ang1 + ang2 + ang3;

if (somaDosAngulos === 180) {
    console.log(true);
} else if (somaDosAngulos !== 180 && somaDosAngulos > 0 ) {
    console.log(false);
} else {
    console.log("Erro, ângulo inválido");
}

// Exercício 6

const peçaXadrez = "Rei";

switch (peçaXadrez.toLowerCase()) {
    case 'rei':console.log('Rei-> Move uma casa para qualquer direção.');
      break;
    case 'rainha':console.log('Rainha-> Diagonal, horizontal e vertical.');
      break;
    case 'bispo':console.log('Bispo-> Diagonal.');
      break;
    case 'cavalo':console.log('Cavalo -> "L" pode pular sobre as peças.');
      break;
    case 'torre':console.log('Torre -> Horizontal e vertical.');
      break;
    case 'peão':console.log('Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.');
      break;
    default: console.log('Erro, Peça inválida!');
      break;
};

// Exercício 7

const grade = 92;

if (grade < 0 || grade > 100) {
    console.log('Erro, nota incorreta!');
} else if (grade >= 90) {
    console.log('A');
} else if (grade >= 80) {
    console.log('B');
} else if (grade >= 70) {
    console.log('C');
} else if (grade >= 60) {
    console.log('D');
} else if (grade >= 50) {
    console.log('E');
} else {
    console.log('F');
}

// Exercício 8

let numb1 = 3;
let numb2 = 10;
let numb3 = 6;

if (numb1 % 2 === 0 || numb2 % 2 === 0 || numb3 % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}

// Exercício 9

let isOdd = false;

if (numb1 % 2 !== 0 || numb2 % 2 !== 0 || numb3 % 2 !== 0) {
    isOdd = true;
} console.log(isOdd);

// Exercício 10

const custoProduto = 1;
const valorVenda = 5;

if (custoProduto >= 0 && valorVenda >= 0) {
  const prodImpos = custoProduto * 1.2;
  const lucroTotal = (valorVenda - prodImpos)* 1000;
  console.log(lucroTotal);
} else {
    console.log('Erro, valor impossível.')
}

// Exercício 11

let aliquotaINSS;
let aliquotaIR;

let salarioBruto = 4000.00;

if (salarioBruto <= 1556.94) {
    aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
    aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82 ) {
    aliquotaINSS = salarioBruto * 0.11;
} else {
    aliquotaINSS = 570.88;
}

let salarioBase = salarioBruto - aliquotaINSS;

if (salarioBase <= 1903.98) {
    aliquotaIR = 0;
} else if (salarioBase <= 2826.65) {
    aliquotaIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05 ) {
    aliquotaIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
    aliquotaIR = (salarioBase * 0.225) - 636.13;
} else {
    aliquotaIR = (salarioBase * 0.275) - 869.36;
}

let salaryValue = 'R$ ' + (salarioBase - aliquotaIR);
console.log(salaryValue);