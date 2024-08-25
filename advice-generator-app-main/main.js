new advice(04, "never faill always try")

const fetchPhrase = () => {

    for(let i = 0; i < 2; i++){

    // CONSTANTE ONDE A ENDPOINT SERÁ ARMAZENADA
    const url = "https://api.adviceslip.com/advice";


    // BUSCAR A REQUISIÇÃO VIA PROTOCLO HTTP
    fetch(url)
    // busca a response e gera um arquivo json, pq uma response é uma promise, que não pode ser utilizada para navegação
    .then((response) => response.json())
    // manipulção do documento para que eu possa utilizar os dados
    .then((data) => {

        document.querySelector("#advice-id").innerText = data.slip.id
        document.querySelector("#advice").innerText = data.slip.advice

    })
    // caso conexão mal sucedida
    .catch(error => alert("Por favor verifique sua rede, ou tente novamente mais tarde!"))
    }

}

document.querySelector("#button").addEventListener("click", ()=>{
    for(let i = 5; i!=0; setTimeout(i--, 1000)){
        document.querySelector("#button").innerText = i
    }
    fetchPhrase()
})