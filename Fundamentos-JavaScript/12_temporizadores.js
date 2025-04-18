console.log("temporizador 3 segundos e intervalo 5 segundos")

function temporizador(){
    console.log("Temporizador apenas uma vez")
}

function intervalo(){
    console.log("Intervalo repetindo a cada 5s")
}

setTimeout(temporizador, 3000);

console.log()

setInterval(intervalo, 5000);

