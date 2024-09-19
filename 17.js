//Faça um algoritmo que leia uma temperatura em Fahrenheit e calcule a temperatura 
//correspondente em grau Celsius. Imprima na tela as duas temperaturas. Fórmula:
// C = (5 * ( F-32) / 9)

let Fahr = 75
let Celsius = (5 * (Fahr - 32) / 9)

console.log(`A temperatura em Fahrenheit é ${Fahr}° e em Celsius é ${Celsius.toFixed(1)}°`)