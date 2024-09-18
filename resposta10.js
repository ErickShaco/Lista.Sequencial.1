const prompt = require("prompt-sync")()

const celsius = prompt(`Quantos Celsius esta fazendo hoje?`)

const fah = ((celsius * 9) / 5) + 32

console.log(`Em Fahrenheit hoje está fazendo ${fah}`)
