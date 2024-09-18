// Faça um algoritmo que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário

const prompt = require("prompt-sync")()

const lado1 = parseInt(prompt(`Digite o comprimento do lado por favor`))

const lado2 = parseInt(prompt(`Digite o comprimento do lado por favor`))


const area = lado1 * lado2

const dobro = area * 2

console.log(`A area do quadrado é ${area} e o seu dobro é ${dobro}`)


 
