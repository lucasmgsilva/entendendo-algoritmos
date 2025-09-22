function pesquisaBinaria(items, item) {
    let baixo = 0;
    let alto = items.length - 1

    while (baixo <= alto) {
        let meio = Math.floor((baixo + alto) / 2);
        let chute = items[meio];

        if (chute === item) {
            return meio;
        }

        if (chute > item) {
            alto = meio - 1
        } else {
            baixo = meio + 1
        }
    }

    return null
}

let minhaLista = [1, 3, 5, 7, 9]

console.log(pesquisaBinaria(minhaLista, 3)) // retorno: 1
console.log(pesquisaBinaria(minhaLista, -1)) // retorno: null