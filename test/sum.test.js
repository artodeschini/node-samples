const sum = require("../src/sum")

it('deve retornar o valor correto da soma ', () => {
    const result = sum(2,3)
    expect(result).toBe(5)
})
