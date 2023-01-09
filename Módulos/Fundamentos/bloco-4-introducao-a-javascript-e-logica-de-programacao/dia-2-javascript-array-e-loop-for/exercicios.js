// Array utilizado nos Exercícios 1 ao 7;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 1
for (let index = 0; index < numbers.length; index += 1) {
    // console.log(numbers[index]);
}

// Exercício 2
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}
// console.log(result);

// Exercício 3
let somaTotal = 0;

for (let index = 0; index < numbers.length; index+=1) {
    somaTotal += numbers[index];
}
let mediaAritmetica = somaTotal / numbers.length;
// console.log(mediaAritmetica);

// Exercício 4
if (mediaAritmetica > 20) {
    // console.log("valor maior que 20");
} else {
    // console.log("valor menor ou igual a 20");
}

// Exercício 5

let maiorValor = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > maiorValor) {
        maiorValor = numbers[index]
    }
}
// console.log(maiorValor);

// Exercício 6

let result2 = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        result2 += 1;
    }
}
if (result2 === 0) {
    // console.log('nenhum valor ímpar encontrado');
} else {
    // console.log(result2);
}

// Exercício 7

let menorNumero = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if ( numbers[index] < menorNumero) {
        menorNumero = numbers[index]
    }
}
// console.log(menorNumero);

// Exercício 8

let newArray = [];

for (let index = 1; index <= 25; index += 1) {
    newArray.push(index);
}
// console.log(newArray);

// Exercício 9
for (let index = 0; index < newArray.length; index += 1) {
    // console.log(newArray[index] / 2);
}