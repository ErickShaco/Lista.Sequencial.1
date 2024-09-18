const prompt = require("prompt-sync")()

const Fah = prompt(`Quantos F está Hoje?`)

const c = 5

const celsius = ((Fah - 32) * 5) / 9

console.log(`Em celsius hoje está fazendo ${celsius}`)

