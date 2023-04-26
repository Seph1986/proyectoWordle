let intentos = 5;

let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH','HELLO','BREAD','BRIEF','ALARM','FORCE']
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];

const BUTTON = document.getElementById("guess-button");
BUTTON.addEventListener("click", intentar);

function intentar(){
    const INTENTO = leerIntento();
    if (INTENTO === palabra ) {
        terminar("<h1>GANASTE! 😀</h1>")

        const GRID = document.getElementById ("grid");
        const ROW = document.createElement ('div');
        ROW.className = 'row';

            for (let i in INTENTO){
            const SPAN = document.createElement('span');
            SPAN.className = 'letter';
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#79b851';

            ROW.appendChild(SPAN);}
        GRID.appendChild(ROW);

         return
    }
    
    const GRID = document.getElementById ("grid");
        const ROW = document.createElement ('div');
        ROW.className = 'row';
        for (let i in palabra){
            const SPAN = document.createElement('span');
            SPAN.className = 'letter';
            if (INTENTO[i]===palabra[i]){ //VERDE
                SPAN.innerHTML = INTENTO[i];
                SPAN.style.backgroundColor = '#79b851';
            } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
                SPAN.innerHTML = INTENTO[i];
                SPAN.style.backgroundColor = '#f3c237';
            } else {      //GRIS
                SPAN.innerHTML = INTENTO[i];
                SPAN.style.backgroundColor = '#a4aec4';
            }
            ROW.appendChild(SPAN)
        }
        GRID.appendChild(ROW)

		
        intentos--
    if (intentos==0){
        terminar("<h1>PERDISTE! 😒</h1>")
    }
}

function leerIntento(){
    let prueba = document.getElementById ("guess-input");
    prueba = prueba.value;
    prueba = prueba.toUpperCase();
    return prueba;
}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BUTTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;


}



/*window.addEventListener('load', init)

function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}*/
