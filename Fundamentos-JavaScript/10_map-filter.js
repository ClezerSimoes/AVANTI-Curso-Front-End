const valores = [2,3,4,5]

const valoresDobrados = valores.map(valor => valor * 2)

console.log(`Valores Dobrados: ${valoresDobrados}`)


const usuarios = [
    {nome: "Clezer", age: 28},
    {nome: "Paulo", age: 26},
    {nome: "Kawan", age: 18}
]

const nomes = usuarios.map(usuarios => usuarios.nome)

console.log(nomes)

// filtro 

const filtroValores = valores.filter(valores => valores>= 3)

console.log(filtroValores)

const filtroUsuaruios = usuarios.filter(usuarios => usuarios.age <28 )

console.log(filtroUsuaruios)