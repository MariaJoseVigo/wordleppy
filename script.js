let intentos = 6;
let palabra = "APPLE";

const BOTON = document.getElementById('guess-button');
BOTON.addEventListener('click', () => { 
    const INTENTO = leerIntento{};
    console.log('intento');

});

function leerIntento (){
   let intento = document.getElementById("guess.input").value;
   return intento.toUpperCase();

}

function intentar(){
    const INTENTO = leerIntento();
    if (INTENTO === palabra ) {
        console.log("GANASTE!")
        return
    }
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){
            console.log(INTENTO[i], "VERDE")
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        } else if( palabra.includes(INTENTO[i]) ) {
            console.log(INTENTO[i], "AMARILLO")
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else {
            console.log(INTENTO[i], "GRIS")
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
    }
    ROW.appendChild(SPAN)
}
GRID.appendChild(ROW)
    }
		intentos--;
    if (intentos==0){
        console.log("PERDISTE!")
    }

}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}


 