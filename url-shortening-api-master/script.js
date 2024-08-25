// Variáveis
const linkHistory = document.querySelector("#link-history");
const form = document.querySelector("form");
const dropdownIco = document.querySelector("#dropdown-ico");
const api = "https://spoo.me/";
let fullLink;
let shortLink;
let shortened = JSON.parse(localStorage.getItem("shortened") || "[]");

// Adiciona os cartões salvos se existirem
window.addEventListener("load", ()=>{
    if(shortened != "[]"){
        addCard()
        return
    } else {return}
})

// menu dropdown
dropdownIco.addEventListener("click", ()=>{
    document.querySelector("header").classList.toggle("toggled")
})

// construtor de objeto search
class search {
    constructor(id, full, short) {
        this.id = id;
        this.fullLink = full;
        this.shortLink = short;
    }
}

/* --------------------------- captura de link --------------------------- */
const getLink = async ()=>{
    fullLink = document.querySelector("#link-input").value;
    
    await fetch(api, {
        method:"POST",
        headers:{
            'Content-Type':'application/x-www-form-urlencoded',
            'Accept':'application/json', 
        },
        body: new URLSearchParams({"url":fullLink})
    })
    .catch(error => console.error("ocorre um erro" + error))
    .then(response=>response.json())
    .then(async data => {
        

        shortened.push(new search(data.short_url.slice(-6), fullLink, data.short_url))

        localStorage.setItem("shortened", JSON.stringify(shortened));

        })
}

// adicionar cartão com dados do link capturado
const addCard = ()=>{

    linkHistory.innerHTML = "" //container deverá ser esvaziado para a reinserção de dados e evitar duplicação de objetos

    for(let i = 0; i < shortened.length; i++){ //laço de repetição que percorre toda a array de objetos search

        //inserção de dados com "template" ou "literal strings"
    linkHistory.innerHTML += `   
<div id="history-card${[i]}" class="history-card">
    <div class="history-col-1"><span class="full-link">${shortened[i].fullLink}</span></div>
    <div class="history-col-2"><span class="short-link">${shortened[i].shortLink}</span></div>
    <div class="history-col-3"><button class="button copy-button" type="button" onclick="addClick(this)">Copy</button></div>
</div>
    `
    }
}


form.addEventListener("submit", async (event)=>{
    event.preventDefault() //evita que a página seja atualizado quando for submitado
    await getLink()
    addCard()
    document.querySelector("#link-input").value = ""; //limpa o campo de texto após o envio
})


// função ativada sempre que o botão de copy for clickado
const addClick = element =>{
    let buttons = document.querySelectorAll(".copy-button")
    for(i = 0; i < buttons.length; i++){
        if(buttons[i].parentElement.parentElement === element.parentElement.parentElement){
            navigator.clipboard.writeText(element.parentElement.parentElement.querySelector('.short-link').innerText)
            element.style.backgroundColor = "#3b3054"
            element.innerText = "Copied!"
        }else{
            buttons[i].style.backgroundColor = "#2acfcf"
            buttons[i].innerText = "Copy"
        }
    }
}

