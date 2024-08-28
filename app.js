/*Global Functions*/

function showResponseContainer(){
    document.getElementById("main__right__container__yes__answer").style.display = "flex";
    hideNoAnswerContainer();
}

function hideResponseContainer(){
    document.getElementById("main__right__container__yes__answer").style.display = "none";
}

function showNoAnswerContainer(){
    document.getElementById("main__right__container__no__answer").style.display = "flex";
}

function hideNoAnswerContainer(){
    document.getElementById("main__right__container__no__answer").style.display = "none";
}

/*Mostrar respuesta*/

function showAnswer(text){
    document.getElementById('answer-area').value = text;
}

/*Encriptador*/
function encriptar(){
    /*Capturing the input*/
    let userInput = document.getElementById('input-area').value;

    let answer = userInput
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    /*First we need to show the Response Container*/
    showResponseContainer();

    /*Showing the Answer*/
    showAnswer(answer);
}

function desencriptar(){
/*Capturing the input*/
    let userInput = document.getElementById('input-area').value;

    /*Desencription Process*/
    let answer = userInput
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

/*First we need to show the Response Container*/
showResponseContainer();

/*Showing the Answer*/
showAnswer(answer);
}

function copiar(){
/*Capturing the input*/
let answerTextArea = document.getElementById('answer-area');

/*We select the text*/
answerTextArea.select();

/*We select for mobile*/
answerTextArea.setSelectionRange(0, 99999);
/*We make the copy command*/
document.execCommand('copy');
}


