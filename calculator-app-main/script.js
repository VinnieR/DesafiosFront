"use strict"
//VARS
let themeStyle = document.querySelector("#selector-input").value;
let result = document.querySelector("#result");
let calculus = [];
let exception = ["*", "/"]

const noWords = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?(?:[\+\-\*\/][-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)*$/;



    //Calc-buttons
    let numberButtons = document.querySelectorAll(".number-button")
    let calcButtons = document.querySelectorAll(".calc-button")
    let operatorButtons = document.querySelectorAll(".operator-button")
    let delButton = document.querySelectorAll("#del-button")
    let resetButton = document.querySelectorAll("#reset-button")
    let equalButton = document.querySelectorAll("#equal-button")

        //logical var
        let operators = []
        for(let i = 0; i < operatorButtons.length; i++){
            operators.push(operatorButtons[i].value)
        }

// FUNCTIONS
    let updateTheme = ()=>{

        let selector = ()=>{
            if(document.querySelector("#selector-input").value == 3){
                document.querySelector("#selector-input").value = 1
            }else{
                document.querySelector("#selector-input").value++
            }

            return themeStyle = document.querySelector("#selector-input").value
        }


        let applyTheme1 = ()=>{
            const rootStyle = document.documentElement.style;

            rootStyle.setProperty('--bs-1', 'hsl(28, 16%, 65%)')
            rootStyle.setProperty('--bs-2', 'hsl(224, 28%, 35%)')
            rootStyle.setProperty('--bs-3', 'hsl(6, 70%, 34%)')

            rootStyle.setProperty('--bbg-1', 'hsl(30, 25%, 89%)')
            rootStyle.setProperty('--bbg-2', 'hsl(225, 21%, 49%)')
            rootStyle.setProperty('--bbg-3', 'hsl(6, 63%, 50%)')

            rootStyle.setProperty('--text-1', 'hsl(221, 14%, 31%)')
            rootStyle.setProperty('--text-2', 'hsl(0, 0%, 100%)')
            rootStyle.setProperty('--main-bg', 'hsl(222, 26%, 31%)')
            rootStyle.setProperty('--input-bg', 'hsl(223, 31%, 20%)')
            rootStyle.setProperty('--result-bg', 'rgba(0, 0, 0, .5)')
            rootStyle.setProperty('--keypad-bg', 'rgba(0, 0, 0, .4)')

            document.querySelector('#equal-button').classList.toggle('theme3');
        }

        let applyTheme2 = ()=>{
            const rootStyle = document.documentElement.style;

            rootStyle.setProperty('--bs-1', 'hsl(35, 11%, 61%)')
            rootStyle.setProperty('--bs-2', 'hsl(185, 58%, 25%)')
            rootStyle.setProperty('--bs-3', 'hsl(25, 99%, 27%)')

            rootStyle.setProperty('--bbg-1', 'hsl(45, 7%, 89%)')
            rootStyle.setProperty('--bbg-2', 'hsl(185, 42%, 37%)')
            rootStyle.setProperty('--bbg-3', 'hsl(25, 98%, 40%)')

            rootStyle.setProperty('--text-1', 'hsl(60, 10%, 19%)')
            rootStyle.setProperty('--text-2', 'hsl(60, 10%, 19%)')
            rootStyle.setProperty('--main-bg', 'hsl(0, 0%, 90%)')
            rootStyle.setProperty('--input-bg', 'hsl(0, 5%, 81%)')
            rootStyle.setProperty('--result-bg', 'rgba(255, 255, 255, .5)')
            rootStyle.setProperty('--keypad-bg', 'rgba(255, 255, 255, .4)')

            document.querySelector('#del-button').style.color = 'white';
            document.querySelector('#reset-button').style.color = 'white';
            document.querySelector('#equal-button').style.color = 'white';
        }

        let applyTheme3 = ()=>{
            const rootStyle = document.documentElement.style;

            rootStyle.setProperty('--bs-1', 'hsl(290, 70%, 36%)')
            rootStyle.setProperty('--bs-2', 'hsl(285, 91%, 52%)')
            rootStyle.setProperty('--bs-3', 'hsl(177, 92%, 70%)')

            rootStyle.setProperty('--bbg-1', 'hsl(268, 47%, 21%)')
            rootStyle.setProperty('--bbg-2', 'hsl(281, 89%, 26%)')
            rootStyle.setProperty('--bbg-3', 'hsl(177, 92%, 70%)')

            rootStyle.setProperty('--text-1', 'hsl(52, 100%, 62%)')
            rootStyle.setProperty('--text-2', 'hsl(52, 100%, 62%)')
            rootStyle.setProperty('--main-bg', 'hsl(268, 75%, 9%)')
            rootStyle.setProperty('--input-bg', 'hsl(268, 71%, 12%)')
            rootStyle.setProperty('--result-bg', 'hsl(268, 71%, 12%)')
            rootStyle.setProperty('--keypad-bg', 'hsl(268, 71%, 12%)')

            document.querySelector('#del-button').style.color = 'white';
            document.querySelector('#reset-button').style.color = 'white';
            document.querySelector('#equal-button').classList.toggle('theme3');
        }


        switch (selector()) {
            case '1':
                applyTheme1()
            break;
            case '2':
                applyTheme2()
            break;
            case '3':
                applyTheme3()
            break

            default:
                window.alert("unexpexted error")
                break;
        }

    }

    let maskNums = (entry) => {
        // Converte para string, removendo caracteres indesejados
        let resultStr = entry.toString().replace(/[^\d.e+-]/g, '');

        // Divide a parte inteira e a parte decimal (se existir)
        let [integerPart, decimalPart] = resultStr.split('.');

        // Formata a parte inteira com vírgulas a cada três dígitos do final
        let formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        // Adiciona a parte decimal, se existir
        let formattedResult = decimalPart !== undefined ? formattedIntegerPart + '.' + decimalPart : formattedIntegerPart;

        // retorna o resultado formatado
        return formattedResult;
    }

    let addToCalculus = ()=>{
        
        if(document.querySelector("#result").innerHTML !== "" && document.querySelector("#result").innerHTML !== "."){
            let inValue = document.querySelector("#result").innerHTML;

            let outValue = inValue.replaceAll(',', '')
            calculus.push(outValue)

            document.querySelector("#result").innerHTML = '';
        }
    }

    let validateFirstEntry = (buttonValue) =>{

        if (calculus.length === 0 && exception.includes(buttonValue) && result.innerHTML === '') {
            return false; // Impede a adição do operador
        }else{ 
            return true;
        }
    }


    operatorButtons.forEach(button =>{
        
        button.addEventListener("click", ()=>{

            //validação de dados e inserção de valores para cálculo
            if(validateFirstEntry(button.value)){

                if(operators.includes(document.querySelector("#result").innerHTML)){
                    document.querySelector("#result").innerText = button.value;
    
                }else{
                    addToCalculus();
                    document.querySelector("#result").innerText = button.value;
                }
            } else {
                setTimeout(() => {
                    window.alert("A primeira entrada não pode ser um operador!")
                }, 350);
            }
            
            
        })

    })

    for(let i = 0; i < numberButtons.length; i++){
        numberButtons[i].addEventListener("click", () => {
        

            if(operators.includes(document.querySelector("#result").innerHTML)){ //se o valor exibido for um operador
                addToCalculus()
            }

            if(document.querySelector("#result").innerHTML.length < 32){
                if (numberButtons[i].value === '.') {
                    if (!document.querySelector("#result").innerHTML.includes('.')) {
                        document.querySelector("#result").innerHTML += numberButtons[i].value;
                    }
                } else {
                    document.querySelector("#result").innerHTML += numberButtons[i].value;
                }
            } else {
                window.alert("limite de caracteres excedido!")
            }
        });

    }

    numberButtons.forEach(element => {

        element.addEventListener("click", ()=>{

            if(result.innerHTML != null){

                result.innerHTML = maskNums(result.innerHTML)
            }
        })

    });

    numberButtons.forEach(element => {

        element.addEventListener("click", ()=>{
            
            if(result.innerHTML != null){
                maskNums(result)
            }else{
                return;
            }
        })
    });
    

    document.querySelector("#del-button").addEventListener("click", () => {
        let currentNums = document.querySelector("#result").innerHTML;
        
        // Verifica se a string não está vazia antes de tentar remover o último caractere
            if (currentNums.length > 0) {
                // Utiliza slice para obter a substring excluindo o último caractere
                currentNums = currentNums.slice(0, -1);
                
                // Atualiza o conteúdo da div com a nova string
                document.querySelector("#result").innerHTML = maskNums(currentNums);
            }
            return

    });

    document.querySelector("#reset-button").addEventListener("click", ()=>{
        result.innerHTML = '';
        calculus = []
        return
    })

    document.querySelector("#equal-button").addEventListener("click", ()=>{
        let output;

        if(calculus.length != 0){
        addToCalculus()

        let calculation = calculus.join('');

        let validateInput = (input) => {return noWords.test(input);}

        if(validateInput(calculation)){
            output = eval(calculation);
        }else{
            window.alert("An unexpected error occurred :(\nPlease try again!")
            output = "error"
        }

        if(output == 'error'){
            result.innerHTML = output
            setTimeout(() => {
                return result.innerHTML = '';
            }, 1500);
        }else if(isFinite(output) == false){
            result.innerHTML = 'Infinity'
        }else{
            result.innerHTML = maskNums(output);
            calculus = []
        }
    }else{
        return
    }
    });


//HANDLERS
document.querySelector("#selector-row-2", "::after").addEventListener("click", updateTheme)

window.addEventListener('load', ()=>{return document.querySelector("#selector-input").value = 0;})

calcButtons.forEach(button => {
    button.addEventListener("click", ()=>{

        if(button.id=='del-button' || button.id=='reset-button'){
            button.classList.add("clickedBlue")
            setTimeout(() => {
                button.classList.remove("clickedBlue")
            }, 150);
        }else if(button.id=='equal-button'){
            button.classList.add("clickedRed")
            setTimeout(() => {
                button.classList.remove("clickedRed")
            }, 150);
        }else{
            button.classList.add("clicked")
            setTimeout(() => {
                button.classList.remove("clicked")
            }, 150);
        }
    })
})



//lOGS
