function fetchGithubUser(username) {

    fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
            if(!response.ok){
                console.error(error)
            }
            return response.json()
        })
        .then((user) => {
            console.log("User", user)
            createUserCard(user)
        })
        .catch((error) =>{
            console.log(error)
            const app = document.getElementById("app")
            app.innerHTML = `<p style='color:red'>Erro: ${error.message}</p>`
        })
}

// Função criar card do usuário

function createUserCard(user){
    const app = document.getElementById("app")

    const card = document.createElement("div")
    card.className = "card"

    const avatar = document.createElement("img")
    avatar.src = user.avatar_url
    avatar.alt = `${user.login}'s Avatar`

    const name = document.createElement("h2")
    name.textContent = user.name

    const login = document.createElement("p")
    login.textContent = `@${user.login}`

    const biograph = document.createElement("p")
    biograph.textContent = user.bio

    card.appendChild(avatar)
    card.appendChild(name)
    card.appendChild(login)
    card.appendChild(biograph)

    app.appendChild(card)
}
fetchGithubUser("ClezerSimoes")