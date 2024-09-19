//Faça um algoritmo que leia três valores inteiros diferentes e imprima na 
//tela os valores em ordem decrescente.


let numeros = [1, 2, 5, 6, 3, 9, 7, 8]

numeros.sort((a, b) => a - b)
console.log(`Os valores sendo impressos em ordem decrescente é ${numeros}`)