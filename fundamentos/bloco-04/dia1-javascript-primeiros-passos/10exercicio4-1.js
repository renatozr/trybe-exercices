let custoProduto = 1;
let valorVenda = 2;


if (custoProduto >= 0 && valorVenda >= 0) {
    let custoTotal = custoProduto * 1.2;
    let lucro = (valorVenda - custoTotal) * 1000;
    console.log(lucro);
} else {
    console.log("Erro, valores inválidos.");
}