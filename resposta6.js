// Faça um algoritmo que peça o raio de um círculo, calcule e mostre sua área

const prompt = require("prompt-sync")()

const raio = parseFloat(prompt(`Digite o Raio do circulo por favor`))

const pi = Math.PI

const area = (pi * raio) * raio

console.log(`A area do circulo é ${area}`)
