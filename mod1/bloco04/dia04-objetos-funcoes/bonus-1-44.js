function conversaoRomano(stringRomano) {

    let tabelaConversao = {

        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000 
    }
    let arrayNum = [];

    for (let caracRomano of stringRomano) {

        for (let caracTabela in tabelaConversao) {

            if (caracRomano == caracTabela) {

                arrayNum.push(tabelaConversao[caracTabela]);
            }
        }
    }
    let arrayOpera = [];
    for (let i = 0; i < arrayNum.length; i += 1) {

        let iguais = arrayNum[i];
        if (arrayNum[i] == arrayNum[i + 1]) {
            iguais += arrayNum[i];
        }
    }
    let result;
}