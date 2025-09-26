function regressiva(i) {
    console.log(i)

    if (i <= 1){
        return
    } else {
        regressiva(i - 1)
    }
}

regressiva(5)