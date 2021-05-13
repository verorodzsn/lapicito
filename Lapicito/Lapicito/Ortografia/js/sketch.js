// Variables globales
let palabra; // Lo que se tiene que adivinar
let casita; // Ahorcado
let pista; // Número de letras de la palabra
let letra; // Letra que el usuario adivinó
let destruida; // Si ya perdiste o no
let intentos = 0; // Intentos que llevas
let maxIntentos = 2; // Vidas

let casita1;
let casita2;
let casita3;
let zanahoriaImg;
let button;
let input;
let textoGanar = "¡Ganaste! Lograste proteger la casita del cochito.";
let textoPerder = "¡Oh no! La casita del cochito ha sido destruida...";
let lobitoNormalX = 450;
let frameInicio;
let frameFinal;

function preload() {
    casita1 = loadImage('img/CasitaS1.png');
    casita2 = loadImage('img/CasitaS2.png');
    casita3 = loadImage('img/CasitaS3.png');
    //zanahoriaImg = loadImage('img/zanahoria.jpg');
    fondo = loadImage('img/Fondo.png');
    lobitoNormal = loadImage('img/lobitoNormal.png');
    lobitoSoplando = loadImage('img/lobitoSoplando.gif');
}

function setup(){
    createCanvas(600, 700);
    palabra = "zanahoria";
    pista = new Array (palabra.length);
    destruida = false;
    intentos = 0;
    maxIntentos = 2;
    background("#ccd56d");

    button = createButton('Adivinar');
    button.position(350, 630);
    button.mousePressed(adivinarLetra);
    button.style('font-size', '30px');

    let input = createInput('');
    //input.center("horizontal", "vertical");
    input.position(250,600);
    input.size(50);
    input.id('adivinanza');
    input.style('font-size', '50px');
    input.style('color', 'red');
    input.style('padding', '20px');

    //lobito = new p5.Element(elt, lobitoNormal);
    frameRate(20);
}


function adivinarLetra(){
    let letra = document.querySelector('#adivinanza').value;
    let contador = 0;
    for(let i=0; i<palabra.length; i++){
        if(palabra[i]==letra){
            pista[i] = letra;
        } else{
            contador += 1;
        }
    }
    if(contador == palabra.length){
        intentos += 1;
    }
    document.querySelector('#adivinanza').value = "";
    document.querySelector('#adivinanza').focus();
}

function dibujarPista(){
    let construccionPista = "";

    for(let i =0; i<pista.length ; i++){
        if(pista[i] == undefined){
            construccionPista += "_ ";
        } else{
            construccionPista += pista[i];
        }
    }
    textSize(50);
    fill(255,255,255);
    textAlign(CENTER, CENTER);
    text(construccionPista, 0, 430, 625, 200);
} 

function terminoJuego(){

    let pistaString;
    pistaString = pista.join("");

    if(pistaString == palabra){
        return true;
    } else {
        return false;
    }
}

function draw(){
    background('#ccd56d');
    image(fondo, 0, 0, 625, 500);
    dibujarPista();
    //image(zanahoriaImg, 500, 20, 250, 250);
    image(lobitoNormal, lobitoNormalX, 360, 66, 125);

    if (intentos == 0){
        image(casita1, 60, 250, 350, 250);
    }

    if (intentos == 1){
        frameInicio = frameCount;
        lobitoNormalX += 1000;
        if(frameCount < frameInicio + 3){
            image(lobitoSoplando, 420, 360, 97, 125);
        } else {
            lobitoNormalX -= 1000;
        }
        image(casita2, 60, 250, 350, 250);
    }

    if (intentos == 2){
        image(casita3, 60, 250, 350, 250);
        textSize(35);
        //textAlign(CENTER, CENTER);
        text(textoPerder, 80, 100, 450, 200);
        button.hide();
    }

    if(terminoJuego()){
        textSize(35);
        text(textoGanar, 50, 100, 450, 200);
        button.hide();
    }

    text(frameCount, 50, 50);
    text(frameInicio, 50, 100);
}