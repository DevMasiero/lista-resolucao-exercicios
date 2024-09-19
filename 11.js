//Faça um algoritmo que leia quatro notas obtidas por um aluno, calcule a média 
//das nota obtidas, imprima na tela o nome do aluno e se o aluno foi aprovado 
//ou reprovado. Para o aluno ser considerado aprovado sua média final deve ser
//maior ou igual a 7.

let nome = 'Lucas'
let a = 7
let b = 7
let c = 9
let d = 7

let media = ((a + b + c + d) / 4)

if (media < 7) {
    console.log(`O aluno ${nome} foi reprovado pois sua nota foi ${media} e o minimo aceitavel é 7`)
} else {
    console.log(`O aluno ${nome} foi aprovado pois sua nota foi ${media}`)
}    