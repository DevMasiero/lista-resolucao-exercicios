//Faça um algoritmo que leia o valor do salário mínimo e o valor do salário de um usuário, 
//calcule quantos salários mínimos esse usuário ganha e imprima na tela o resultado. 
//(Base para o Salário mínimo R$ 1.293,20).

let salario = 10000
let salariominimo = 1293.20

let quantsalario = Math.round(salario / salariominimo )

console.log(`Voce ganha aproximadamente ${quantsalario} salarios minimos`)
