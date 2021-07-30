let salarioBruto = 4000;

let inss;
let ir;

if (salarioBruto <= 1556.94) {
    inss = salarioBruto * 0.08;

} else if (salarioBruto <= 2594.92) {
    inss = salarioBruto * 0.09;

} else if (salarioBruto <= 5189.82) {
    inss = salarioBruto * 0.11;

} else {
    inss = 570.88;
}

let salarioDeduzido = salarioBruto - inss;

if (salarioDeduzido <= 1903.98) {
    ir = 0;

} else if (salarioDeduzido <= 2826.65) {
    ir = salarioDeduzido * 0.075 - 142.80;

} else if (salarioDeduzido <= 3751.06) {
    ir = salarioDeduzido * 0.15 - 354.80;

} else if (salarioDeduzido <= 4664.68) {
    ir = salarioDeduzido *  0.225 - 636.13;

} else {
    ir = salarioDeduzido * 0.275 - 869,36;

}

let salarioLiquido = salarioDeduzido - ir;
console.log(salarioLiquido);