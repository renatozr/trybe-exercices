let pecaXadrez = "cAValO";

switch (pecaXadrez.toLowerCase()) {
    case "peão":
        console.log("Anda uma casa à frente, e captura em uma casa às diagonáis.");
        break;
    
    case "cavalo":
        console.log("Anda 3 casas em linha reta e 1 para um dos lados, formando um L. Captura somente na casa aonde cair");
        break;

    case "bispo":
        console.log("Anda e captura em diagonais.");
        break;

    case "torre":
        console.log("Anda e captura em linhas retas.");
        break;

    case "dama":
        console.log("Anda e captura em linhas retas e diagonais.");
        break;

    case "rei":
        console.log("Anda e captura nas casas que estão ao redor dele.");
        break;

    default:
        console.log("Erro: Peça inválida.");
}