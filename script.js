// 1 - oneThroughTwenty - Retornar os números de 1 a 20.

function oneThroughTwenty() {
    let meuRetorno = []
    for (let i = 1; i <= 20; i++) {
        meuRetorno.push(i)
    }
    return meuRetorno
}
console.log(oneThroughTwenty())


// 2 - evensToTwenty - Retornar os números pares de 1 a 20.

function evensToTwenty() {
    let meuRetorno = []
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0)
            meuRetorno.push(i)
    }
    return meuRetorno
}
console.log(evensToTwenty())


// 3 - oddsToTwenty - Retornar os números ímpares de 1 a 20.

function oddsToTwenty() {
    let meuRetorno = []
    for (let i = 1; i <= 20; i++) {
        if (i % 2 !== 0)
            meuRetorno.push(i)
    }
    return meuRetorno
}
console.log(oddsToTwenty())


// 4 - multiplesOfFive - Retornar os múltiplos de 5 até 100.

function multiplesOfFive() {
    let meuRetorno = []
    for (let i = 5; i <= 100; i++) {
        if (i % 5 === 0)
            meuRetorno.push(i)
    }
    return meuRetorno
}
console.log(multiplesOfFive())


// 5 - squareNumbers - Retornar todos os números até 100 que forem quadrados perfeitos.

function squareNumbers() {
    let meuRetorno = []
    for (let i = 1; i <= 100; i++) {

        let raiz = i ** 0.5

        if ((raiz % 2) === 1 || (raiz % 2) === 0)
            meuRetorno.push(i)
    }
    return meuRetorno
}
console.log(squareNumbers())



// 6 - countingBackwards - Retornar os números contando de trás para frente de 20 até 1.

function countingBackwards() {
    let meuRetorno = []
    for (let i = 20; i >= 1; i--) {
        meuRetorno.push(i)
    }
    return meuRetorno
}
console.log(countingBackwards())


// 7 - evenNumbersBackwards - Retornar os números pares de 20 até 1

function evenNumbersBackwards() {
    let meuRetorno = [];
    for (let i = 20; i >= 1; i--) {
        if (i % 2 === 0)
            meuRetorno.push(i)
    }
    return meuRetorno
}
console.log(evenNumbersBackwards())


// 8 - oddNumbersBackwards - Retornar os números ímpares de 20 até 1. 

function oddNumbersBackwards() {
    let meuRetorno = []
    for (let i = 20; i >= 1; i--) {
        if (i % 2 !== 0)
            meuRetorno.push(i)
    }
    return meuRetorno
}
console.log(oddNumbersBackwards())



// 9 - multiplesOfFiveBackwards - Retornar os múltiplos de 5 contando de trás para frente a partir de 100. 

function multiplesOfFiveBackwards() {
    let meuRetorno = []
    for (let i = 100; i >= 5; i--) {
        if (i % 5 === 0)
            meuRetorno.push(i)
    }
    return meuRetorno
}
console.log(multiplesOfFiveBackwards())



// 10 - squareNumbersBackwards - Retornar os quadrados perfeitos contando de trás para frente a partir de 100. 

function squareNumbersBackwards() {
    let meuRetorno = []

    for (let i = 100; i >= 1; i--) {

        let raiz = i ** 0.5

        if ((raiz % 2) === 1 || (raiz % 2) === 0)
            meuRetorno.push(i)
    }
    return meuRetorno
}
console.log(squareNumbersBackwards())