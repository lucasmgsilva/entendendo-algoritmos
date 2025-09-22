function buscaMenor(arr) {
    let menor = arr[0]
    let menorIndice = 0

    for (let i = 1; i < arr.length; i++){
        if (arr[i] < menor){
            menor = arr[i];
            menorIndice = i;
        }
    }

    return menorIndice;
}

function ordenacaoPorSelecao(arr){
    const arrLen = arr.length
    const novoArr = []

    for (let i = 0; i < arrLen; i++){
        let menorIndice = buscaMenor(arr);
        novoArr.push(arr[menorIndice])
        arr.splice(menorIndice, 1)
    }

    return novoArr;
}

console.log(ordenacaoPorSelecao([5, 3, 6, 2, 10])) // retorno: [ 2, 3, 5, 6, 10 ]