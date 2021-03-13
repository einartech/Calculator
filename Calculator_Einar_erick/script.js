//Everithyng is loaded
document.addEventListener("DOMContentLoaded", function() {

    ////My const var
    const screenDisplay = document.getElementById("screen-display");
    const allMyButtons = document.querySelectorAll("button");
    //console.log(allMyButtons) OK
    const buttonsArray = Array.from(allMyButtons);
    //console.log(buttonsArray) OK

    ////My var

    var buttonClear = document.querySelectorAll(".operatorClass")[0].innerText = 'C';
    var buttonplusMinus = document.querySelectorAll(".operatorClass")[1].innerText = '+-';
    var buttonPercent = document.querySelectorAll(".operatorClass")[2].innerText = '%';
    var buttonDivided = document.querySelectorAll(".operatorClass")[3].innerText = '/';
    var buttonMultiply = document.querySelectorAll(".operatorClass")[4].innerText = '*';
    var buttonPlus = document.querySelectorAll(".operatorClass")[5].innerText = '+';
    var buttonDot = document.querySelectorAll(".operatorClass")[6].innerText = '.';
    var buttonEqual = document.querySelectorAll(".operatorClass")[7].innerText = '=';
    //console.log(buttonEqual)

    //Operations
    buttonsArray.map(button => button.addEventListener("click",
        function() {
            if (button.innerText !== "=") {
                screenDisplay.innerText += button.innerText
            };
            if (button.innerText) === "=" {
                screenDisplay.innerText = eval(screenDisplay.innerText)
            };
            if (button.innerText === "C") {
                screenDisplay.innerText = ""
            };
        }


    ))






    //Extra functions

    buttonEqual.addEventListener("click", () => {
        let etiquetaAudio = document.createElement("audio")
        etiquetaAudio.setAttribute("src", "click.mp3")
        etiquetaAudio.play()
    })







    //Don't erase
});


//alert('Hola Mundo!');