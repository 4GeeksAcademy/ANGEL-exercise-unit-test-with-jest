let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar/ oneEuroIs.USD
    let valueInYen = valueInEuro*oneEuroIs.JPY
    console.log(valueInYen)
    return valueInYen
}


// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen/oneEuroIs.JPY
    let valueInPound = valueInEuro*oneEuroIs.GBP
    console.log(valueInPound)
    return valueInPound;
}


// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

fromDollarToYen(3)
fromYenToPound(3)


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };