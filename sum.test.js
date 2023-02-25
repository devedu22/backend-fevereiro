const sum = require('./sum')



test('Soama de dois valores',()=>{
    const resultado  = sum(2,5)
    expect(resultado).toBe(8)
})