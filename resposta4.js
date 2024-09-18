// Faça um algoritmo que peça as 4 notas bimestrais e mostre a média
const prompt = require(`prompt-sync`)()

const numero1 = parseInt(prompt(`Digite o Numero Desejado`))

const numero2 = parseInt(prompt(`Digite outro Numero Desejado`))

const numero3 = parseInt(prompt(`Digite o Numero Desejado`))

const numero4 = parseInt(prompt(`Digite o Numero Desejado`))

const media = (numero1 + numero2 + numero3 + numero4) / 4

console.log(`A Media desses numeros é ${media}`)