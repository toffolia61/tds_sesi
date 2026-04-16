let produto1 = 100;
let produto2 = 10;
let valorTotal = produto1 + produto2
const mensagem1 = valorTotal < 100 ? "O valor total do carrinho é " +  valorTotal :  "O valot total do carrinho com desconto é " + (valorTotal - (valorTotal * 0.10 ))
console.log (mensagem1)