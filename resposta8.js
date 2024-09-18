
const prompt = require("prompt-sync")()

const salario = prompt(`Quanto você ganha por hora?`)

const horas = prompt(`Quantas horas você trabalhou este mês?`)

const mes = salario * horas

console.log(`O seu Salario do mes é ${mes}`)

