//Francisco tem 1,50m e cresce 2 centímetros por ano, enquanto Sara tem 1,10m e cresce 3 
//centímetros por ano. Faça um algoritmo que calcule e imprima na tela em quantos anos serão 
//necessários para que Francisco seja maior que Sara.

let Fran = 150
let Sara = 110
let anos = 0

while (Fran <= Sara){
    Fran += 2
    Sara += 3
    anos += 1
}

console.log(`Serão necessários ${anos} anos para que Francisco seja maior que Sara.`)
