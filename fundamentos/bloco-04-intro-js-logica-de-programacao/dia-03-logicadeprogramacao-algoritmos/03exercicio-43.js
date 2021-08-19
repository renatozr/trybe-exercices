let a = 5;

for (let i = 1; i <= a; i += 1) {
    let linha = "";

    for (let i2 = 0; i2 < a - i; i2 += 1) {
        linha += " ";
    }

    for (let i2 = a - i; i2 < a; i2 += 1) {
        linha += "*";
    }

    console.log(linha);
}