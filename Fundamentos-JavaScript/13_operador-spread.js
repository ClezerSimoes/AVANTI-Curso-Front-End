// copiar um array

const numeros = [1,2,3,4,5]

const copiaNumeros = [...numeros]

// concatenar arrays

const numeros2 = [...numeros, ...copiaNumeros]

console.log(numeros2)

//copia objetos

const usuarios = [
    {nome: "Clezer", age: 28},
    {nome: "Paulo", age: 26},
    {nome: "Kawan", age: 18}
]


const copiaUsuarios = [...usuarios]

console.log(copiaUsuarios)