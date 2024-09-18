// Faça um algoritmo que peça dois números e imprima a soma.
const prompt = require(`prompt-sync`)()

const numero1 = parseInt(prompt(`Digite o Numero Desejado`))

const numero2 = parseInt(prompt(`Digite outro Numero Desejado`))

const soma = numero1 + numero2

console.log(`A Soma desses numeros é ${soma}`)