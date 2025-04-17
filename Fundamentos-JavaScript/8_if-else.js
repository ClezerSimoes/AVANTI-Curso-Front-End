const notaFinal = 6

const frequencia = 8

if ((notaFinal >=7) && (frequencia >= 8)){
    console.log("Aprovado")
}
else if ((notaFinal >=6) && (frequencia >= 8)){
    console.log("Recuperação")
}
else{
    console.log("Reprovado")
}

// operação ternária

const idade = 18

const maiorIdade = idade >= 18 ? "Maior de Idade" : "Menor de idade" 

console.log(maiorIdade)