window.addEventListener("load", ()=>{
    let cards = document.querySelectorAll(".card");
    let index = document.querySelectorAll(".index");

    
    function addZero(n){

        if(n < 10){
            let result = "0" + n;

            return result;
        } else {
            return n;
        }

    }

    for(let i = 0; i < cards.length; i++){
        index[i].innerText = addZero(i+1);
    }

})

let isMenuToggled = false;
let menu = document.querySelector("#menu");
let togglerImage = document.querySelector("#toggler-image");

/* Chat Gpt */

function lockScroll(e) {
    e.preventDefault();
  }

document.querySelector("#menu-toggler").addEventListener("click", ()=>{

    menu.classList.toggle("toggled")
    togglerImage.classList.toggle("toggled")
    isMenuToggled = !isMenuToggled;
    
    if(isMenuToggled){
        window.scroll({top: 0, behavior: "smooth"})
        document.addEventListener("touchmove", lockScroll, { passive: false });
    }else{
        document.removeEventListener("touchmove", lockScroll, { passive: false });
    }

})

/* Colocar o footer no local certo quando carregar*/
let pageHeight = window.innerHeight;
let contentHeight = document.body.scrollHeight;

window.addEventListener("load", ()=>{
    if(pageHeight > contentHeight){
        document.getElementsByTagName("footer")[0].style.transform = `TranslateY(${pageHeight - contentHeight}px)`
    } else {
        console.log('não rodou')
    }
})