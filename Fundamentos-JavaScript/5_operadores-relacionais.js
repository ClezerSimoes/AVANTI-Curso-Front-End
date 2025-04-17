const valor1 = 5
const valor2 = 4

const maior = valor1 > valor2

const menor = valor1 < valor2

const igual = valor1 == valor2

const diferente = valor1 != valor2

console.log()
console.log(`O valor1 é maior que o valor 2? ${maior}`)
console.log()
console.log(`O valor1 é menor que o valor 2? ${menor}`)
console.log()
console.log(`O valor1 é igual o valor 2? ${igual}`)
console.log()
console.log(`O valor1 é diferente do valor 2? ${diferente}`)


// Tomar cuidado com igualdade restrita

const numero = 5
const texto = "5"

const igualTexto = valor1 == texto

const diferenteTexto = valor1 != texto

const igualdadeRestrita = valor1 === texto

const diferencaRestrita = valor1 !== texto

console.log()
console.log()
console.log()
console.log()
console.log()
console.log(`O número é igual o texto? ${igualTexto}`)

console.log()
console.log(`O número é diferente do texto? ${diferenteTexto}`)

console.log()
console.log(`O número é igual (restrito) do texto? ${igualdadeRestrita}`)

console.log()
console.log(`O número é diferente (restrito) do texto? ${diferencaRestrita}`)