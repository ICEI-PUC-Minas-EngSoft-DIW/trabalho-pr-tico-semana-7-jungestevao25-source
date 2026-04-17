let nome = ""
let renda = ""
let qdespesas = ""

while (!nome || !isNaN(nome)) {
    nome = prompt("Qual seu nome?: ");
    if (!nome || !isNaN(nome)) {
        alert("Por favor, digite um nome válido (apenas letras).");
    }
}
while (renda === "" || isNaN(Number(renda))) {
    renda = prompt("Digite sua renda: ");
    if (renda === "" || isNaN(Number(renda))) {
        alert("Por favor, digite um valor (apenas números). ");
    }
}
while (qdespesas === "" || isNaN(Number(qdespesas))) {
    qdespesas = prompt("Digite a sua quantidade de despesa: ");
    if (qdespesas === "" || isNaN(Number(qdespesas))) {
        alert("Por favor, digite um valor (apenas números). ");
    }
}
qdespesas = Number(qdespesas)
if (qdespesas >= 5) {
    qdespesas = 5
}else if (qdespesas <= 1) {
    qdespesas = 1
}
console.log(`A quantidade de despesas é ${qdespesas}`)
let limite = qdespesas;
let despesas = 0
for (let i = 1; i <= limite; i++) {
    despesas += Number(prompt(`Digite o valor da despesa ${i}: `))
}

console.log(`Nome de Usuário: ${nome}`)
console.log(`Renda: R$${Number(renda).toFixed(2)}`)
console.log(`Total de Despesas: R$${Number(despesas).toFixed(2)} `)

if (despesas > renda){
    console.log("⚠️ Atenção: você gastou mais do que ganhou.")
} else {
    let sobra = (renda - despesas);
    console.log(`Sobra: R$${Number(sobra).toFixed(2)}`)
    let psobra = ((sobra / renda) * 100);
    if (psobra >= 30) {
        console.log(`✅ Ótimo: boa margem de sobra.`);
    } else {
        console.log(`🙂 Ok: dá para melhorar a sobra.`)
    }
}
