let pcGamer = ["Placa de video", "Ram", "Monitor", "Placa mãe", "mouse"]
console.log(pcGamer.join(' - '));

pcGamer.push("Fonte de Alimentação");
pcGamer.shift();

console.log(`\n${pcGamer.join(' - ')}`);