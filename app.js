/*Global Functions*/

/*This function clears the text on the input area
function clearText(){
    document.getElementById('input-area').value = '';
}
*/

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


/*Encriptador*/
function encriptar(){
    /*Capturing the input*/
    let userInput = document.getElementById('input-area').value;

    /*Encription Process*/
    console.log("encriptar");
    console.log(userInput);
    console.log(typeof(userInput));
    showResponseContainer();
}

function desencriptar(){
    console.log("desencriptar");
}

function copiar(){
    console.log("copiar")
}


