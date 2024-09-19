//Faça um algoritmo que leia três valores que representam os três lados de um triângulo e 
//verifique se são válidos, determine se o triângulo é equilátero, isósceles ou escaleno.

let ladoa = 5
let ladob = 5
let ladoc = 5

if (ladoa === ladob && ladob === ladoc) {
  console.log(`Este triangulo é um triangulo equilatero`)
} else if (ladoa === ladob || ladob === ladoc || ladoa === ladoc) {
  console.log(`Este triangulo é um triangulo Isosceles`)
} else {
  console.log(`Este triangulo é um triangulo Escaleno`)
}