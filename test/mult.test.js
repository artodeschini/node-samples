const mult = require("../src/mult")

it('deve retornar o valor correto da multiplicacao ', () => {
    const result = mult(2,3)
    expect(result).toBe(6)
})