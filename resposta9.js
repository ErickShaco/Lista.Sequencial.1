const prompt = require("prompt-sync")()

const Fah = parseFloat(prompt(`Quantos F está Hoje?`))

const celsius = ((Fah - 32) * 5) / 9

console.log(`Em celsius hoje está fazendo ${celsius.toFixed(3)}`)

