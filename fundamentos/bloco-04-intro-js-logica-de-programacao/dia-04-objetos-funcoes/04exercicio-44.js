function mostCharactersNames(array) {

    let mostName = array[0];

    for (let i of array) {

        if (i.length > mostName.length) {
            mostName = i;
        }
    }
    return mostName;
}

console.log(mostCharactersNames(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));