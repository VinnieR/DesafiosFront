const fetchPhrase = ()=>{
const url = "https://api.adviceslip.com/advice"

fetch(url)
.catch((error) => alert("Por favor verifique sua rede e tente novamente mais tarde!"))
.then((response) => response.json())
.then((data)=>{

    document.querySelector("#advice-id").innerText = data.slip.id
    document.querySelector("#advice").innerText = data.slip.advice


})
}

document.querySelector("#button").addEventListener("click", ()=>{

    fetchPhrase()
})