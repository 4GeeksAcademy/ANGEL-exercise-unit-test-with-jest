const { sum, fromDollarToYen, fromYenToPound } = require ('./app.js')

test('Suma 14 + 9 es igual a 23', () => {
    const total = sum(14,9) 

    expect(total).toBe(23)
}) 

test("3.5 euros should be 3.2635 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("3 dollars should be 438.785 YEN", () => {
    const yen = fromDollarToYen(3)
    const expected = (3/1.07)*156.5
    expect(yen).toBe(expected)
})

test("3 YEN should be 0.016677 pounds", () => {
    const pound = fromYenToPound(3)
    const expected = (3/156.5)*0.87
    expect(pound).toBe(expected)
})