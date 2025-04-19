const inputForm = document.querySelector("#busca")

const buttonBusca = document.querySelector("#buttonBusca")

const resultadoDiv = document.querySelector("#resultado")

inputForm.addEventListener("keydown", (e)=>{
    console.log(e.key)
})

inputForm.addEventListener("focus", (e)=>{
    inputForm.style.backgroundColor = "#FF0"
})

inputForm.addEventListener("blur", (e)=>{
    inputForm.style.backgroundColor = ""
})

function searchResult(){

    const valorBusca = inputForm.value.trim()

    if (valorBusca){
        resultadoDiv.textContent = `Você buscou ${valorBusca}`
    } else {
        resultadoDiv.textContent = `Por favor, insira algo na busca`
    }
}

buttonBusca.addEventListener("click", (e) => {
    searchResult()
})