//Esconde todas las preguntas
$('.questionForm, #gameover, #play').hide();

//Variables
var score = 0;  //El puntaje inicial es 0

var getNameButton = document.getElementById('buttonName');
var getNameInput = document.getElementById('inputUser');
var getNameInputValue; //Obtenemos lo que han escrito en el Input

function getScore() {
    if (score === 3) {
        document.getElementById("result").innerHTML = "<h1>¡Felicidades! Acertaste todas. Eres un verdadero CatLover</h1>";
    } else if (score === 2) {
        document.getElementById("result").innerHTML = "<h1>Bien! Acertaste 2/3. Vas por buen camino, CatLover.</h1>";
    } else if (score === 1) {
        document.getElementById("result").innerHTML = "<h1>Acertaste 1/3. Seguro aprenderás mucho más del mundo felino. </h1>";
    } else {
        document.getElementById("result").innerHTML = "<h1>No acertaste ninguna. ¡Es hora de ponerte a investigar! </h1>";
    }
}

function printUsername() {

    //Cambiamos la primera letra a mayuscula
    getNameInputValue = getNameInputValue[0].toUpperCase() + getNameInputValue.slice(1);
    //Ingresamos el texto en el DIV con el id "USER"
    document.getElementById('user').innerHTML = "CatLover: " + getNameInputValue;

    $('#login').hide();
    $('#play').fadeIn(300);
}

//Play o cancel
$('#play .cancel').click(function () {
    $('#play').hide();
    $('#gameover').fadeIn(300);
    return false;
})

$('#play .start').click(function () {
    $('#play').hide();
    $('#q1').fadeIn(300);
    return false;
})

//Cambios de preguntas
$('#q1 #submit').click(function () {
    $('#q1').hide();
    //Vemos si la respuesta es correcta
    if (document.getElementById("radio-02").checked === true) {
        score = score + 1;
    }
    console.log(score);
    $('#q2').fadeIn(300);
    return false;
})

$('#q2 #submit').click(function () {
    $('#q2').hide();
    //Vemos si la respuesta es correcta
    if (document.getElementById("radio-04").checked === true) {
        score = score + 1;
    }
    console.log(score);
    $('#q3').fadeIn(300);
    return false;
})

$('#q3 #submit').click(function () {
    $('#q3').hide();
    //Vemos si la respuesta es correcta
    if (document.getElementById("radio-08").checked === true) {
        score = score + 1;
    }
    console.log(score);
    $('#result').fadeIn(300);
    getScore();
    return false;
})


//Si aprietas enter ejecutamos la accion
getNameInput.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) { //Keycode === 13 significa si apreto ENTER
        getNameButton.click(); //Al apretar enter enrealidad le damos click al boton
    }
}
)

//Si le da click al boton ejecutamos la accion
getNameButton.addEventListener('click', function () {
    //Obtenemos el texto que hayan puesto en el INPUT
    getNameInputValue = document.getElementById('inputUser').value;

    //Comprobamos que no este vacio
    if (getNameInputValue.length > 0) {
        printUsername(); //Ejecutamos la funcion printUserName()
    } else {
        alert("Por favor ingresa tu nombre"); // Si no mandamos un alert pidiendo el nombre correcto
    }
});
