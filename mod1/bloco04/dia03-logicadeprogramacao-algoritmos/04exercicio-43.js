let a = 5;
let meio = (a + 1)/2
let b = 0;

for (let i = 1; i <= meio; i += 1) {
    let linha = "";

    for (let i2 = 0; i2 < a - i; i2 += 1) {
        linha += " ";
    }

    for (let i2 = a - (i + b); i2 < a; i2 += 1) {
        linha += "*";
    }

    console.log(linha);
    b += 1;
}