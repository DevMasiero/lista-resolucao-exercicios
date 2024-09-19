//Faça um algoritmo que leia o ano em que uma pessoa nasceu, imprima na tela quantos anos,
//meses e dias essa pessoa ja viveu. Leve em consideração o ano com 365 dias e o mês com 30 dias. 
//(Ex: 5 anos, 2 meses e 15 dias de vida)

let nascimento = 2000;
let anoAtual = 2024;
let idade = anoAtual - nascimento;
let anos = idade
let meses = idade * 12
let dias = idade * 365
console.log(`${anos}  anos,  ${meses % 12} meses e ${dias % 30} dias`)


