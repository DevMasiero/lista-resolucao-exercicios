//Faça um algoritmo que leia o valor de um produto e determine o valor que deve ser pago, conforme a escolha 
//da forma de pagamento pelo comprador e imprima na tela o valor final do produto a ser pago. Utilize os 
//códigos da tabela de condições de pagamento para efetuar o cálculo adequado.
//Tabela de Código de Condições de Pagamento
//1 - À Vista em Dinheiro ou Pix, recebe 15% de desconto
//2 - À Vista no cartão de crédito, recebe 10% de desconto
//3 - Parcelado no cartão em duas vezes, preço normal do produto sem juros
//4 - Parcelado no cartão em três vezes ou mais, preço normal do produto mais juros de 10%
//Valor do produto: R$ 100,00

const valorProduto = 100; 
let formaPagamento = 3; 

switch (formaPagamento) {
  case 1:
    valorFinal = valorProduto * 0.85; 
    break;
  case 2:
    valorFinal = valorProduto * 0.90; 
    break;
  case 3:
    valorFinal = valorProduto; 
    break;
  case 4:
    valorFinal = valorProduto * 1.10; 
    break;
  default:
    console.error("Forma de pagamento inválida");
    return;
}

console.log(`Valor final do produto: R$ ${valorFinal.toFixed(2)}`);
