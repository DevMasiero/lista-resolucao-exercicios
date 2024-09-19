//Faça um algoritmo que calcule o IMC (Índice de Massa Corporal) de uma pessoa, 
//leia o seu peso e sua altura e imprima na tela sua condição de acordo com a tabela 
//abaixo:
//
//Fórmula do IMC = peso / (altura) ² Tabela Condições IMC
//
//Abaixo de 18,5 | Abaixo do peso
//
//Entre 18,6 e 24,9 | Peso ideal (parabéns)
//
//Entre 25,0 e 29,9 | Levemente acima do peso
//
//Entre 30,0 e 34,9 | Obesidade grau I
//
//Entre 35,0 e 39,9 | Obesidade grau II (severa)
//
//Maior ou igual a 40 | Obesidade grau III (mórbida)

let peso = 71;
let altura = 1.70;

let formula = peso / altura ** 2;

if (formula <= 18.5) {
    console.log("Abaixo do peso");
} else if (formula > 18.5 && formula <= 24.9) {
    console.log("Peso ideal");
} else if (formula >= 25.0 && formula <= 29.9) {
    console.log("Levemente acima do peso");
} else if (formula >= 30.0 && formula <= 34.9) {
    console.log("Obesidade grau I");
} else if (formula >= 35.0 && formula <= 39.9) {
    console.log("Obesidade grau II (severa)");
} else if (formula >= 40) {
    console.log("Obesidade grau III (mórbida)");
}

console.log(`Seu IMC é ${formula}`)
