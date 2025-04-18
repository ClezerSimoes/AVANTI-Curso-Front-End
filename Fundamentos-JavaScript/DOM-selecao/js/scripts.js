// Seleção por ID

const content = document.getElementById("content")

console.log("content", content)


content.innerHTML = "<p>Parágrafo de texto.</p>"
content.style.backgroundColor = "#F00"
content.style.fontSize = "30px"

// Seleção por classe

const classText = document.getElementsByClassName("text")

console.log("text", classText)

for (text of classText) {
    text.style.color = "#00F"
}

// Seleção por tag

const titles = document.getElementsByTagName("h2")

console.log("titles", titles)

for (title of titles) {
    title.style.color = "#0F0"
}

// Query selector

const elementFeature = document.querySelector("#feature")

const  newElement = document.createElement("p")

newElement.textContent = "mama aqui"
newElement.style.fontSize = "20px"

elementFeature.append(newElement)

elementFeature.insertAdjacentHTML("beforeend", "<p>dhuehudfhudhuhed</p>")

// Query selectorAll

const links = document.querySelectorAll("#links a")

console.log("Links", links)

for (link of links) {
    link.classList.add("feature-links")
    console.log(link.getAttribute("href"))
}