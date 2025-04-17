// estrutura for

for (var i=1; i<11; i++){
    console.log(i)
}
console.log()
console.log()

let lista = ["clezer", "kawan", "paulo", "andrea"]

for (i=0; i<lista.length; i++){
    console.log(lista[i])
}

// estrutura for of

for (let nome of lista){
    console.log(nome)
}

// estrutura for in

let pessoa = {
    nome: "Clezer",
    idade: 18,
    genero: "Masculino"
}

for (let key in pessoa){
    console.log(`${key}: ${pessoa[key]}`)
}

// estrutura while

console.log()
console.log()

let iterador = 0

while (iterador <10){
    console.log(iterador)
    iterador ++
}



