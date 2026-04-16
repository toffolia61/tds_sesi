let estoque = ["SSD 1tb", "Placa de vídeo", "Processador", "Memória ram", "Placa mãe"];

estoque.push("Fonte de Alimentação MSI MAG 600W");

let nomeCliente = "osvaldo";
let idadeCliente = 78;
let possuiCupom = true;
let i;
let valorCompra = 16780;
let venda = processarVenda(valorCompra, possuiCupom);


function processarVenda(valorTotal, cupomAtivo){
    
    var valorFinal = valorTotal > 500 || cupomAtivo == true ? valorTotal * 0.85 : valorTotal;
    return (valorFinal);
}

if(idadeCliente >= 16){
    0
    console.log(`A venda está autorizada para ${nomeCliente}!`);

    for(i = 0; i < 1; i++){
        
        console.log(`Despachando item: ${estoque[i]}`); 
        estoque.shift();
    }    
    
    console.log(`Relatório da Loja: ${nomeCliente} processou um pedido de R$ ${venda}. Itens disponíveis no estoque: ${estoque.length}`);
}
else{
    console.log("Venda bloqueada. Não corresponde com a idade mínima!");
}