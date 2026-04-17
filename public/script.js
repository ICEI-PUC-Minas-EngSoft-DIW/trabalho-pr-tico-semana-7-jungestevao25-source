let nome = ""
let renda = ""
let despesas = ""

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
while (despesas === "" || isNaN(Number(despesas))) {
    despesas = prompt("Digite a sua quantidade de despesa: ");
    if (despesas === "" || isNaN(Number(despesas))) {
        alert("Por favor, digite um valor (apenas números). ");
    }
}
despesas = Number(despesas)
if (despesas >= 5) {
    despesas = 5
}else if (despesas <= 1) {
    despesas = 1
}
console.log(`A quantidade de despesas é ${despesas}`)
let limite = despesas;
despesas = 0
for (let i = 1; i <= limite; i++) {
    despesas += Number(prompt(`Digite o valor da despesa ${i}: `))
}

console.log(nome)
console.log(Number(renda))
console.log(despesas)

if (despesas > renda){
    console.log("⚠️ Atenção: você gastou mais do que ganhou.")
} else {
    let sobra = (renda - despesas);
    let psobra = ((sobra / renda) * 100);
    if (psobra >= 30) {
        console.log(`✅ Ótimo: boa margem de sobra.`);
    } else {
        console.log(`🙂 Ok: dá para melhorar a sobra.`)
    }
}