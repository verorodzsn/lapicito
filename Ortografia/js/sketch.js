// Variables globales
let palabras = ["zanahoria", "cereza", "girasol", "jirafa", "oveja"]; // Lo que se tiene que adivinar
let indiceNivel = 0;
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
let buttonSiguiente;
let input;
let textoGanar = "¡Ganaste! Lograste proteger la casita del cochito.";
let textoPerder = "¡Oh no! La casita del cochito ha sido destruida...";
let lobitoNormalX = 450;
let lobitoSoplandoX = 416;
let frameInicio;
let frameFinal;

function preload() {
    casita1 = loadImage('img/CasitaS1.png');
    casita2 = loadImage('img/CasitaS2.png');
    casita3 = loadImage('img/CasitaS3.png');
    zanahoriaImg = loadImage('img/zanahoria.PNG');
    cerezaImg = loadImage('img/cereza.PNG');
    girasolImg = loadImage('img/girasol.PNG');
    jirafaImg = loadImage('img/jirafa.PNG');
    ovejaImg = loadImage('img/oveja.PNG');
    fondo = loadImage('img/Fondo.png');
    lobitoNormal = loadImage('img/lobitoNormal.png');
    lobitoSoplando = loadImage('img/lobitoSoplando.gif');
    nubeImg = loadImage('img/nubeChiquita.png');
}

function setup(){
    createCanvas(600, 700);
    pista = new Array (palabras[indiceNivel].length);
    destruida = false;
    intentos = 0;
    maxIntentos = 2;
    background("#ccd56d");

    button = createButton('Adivinar');
    button.position(980, 1200);
    button.mousePressed(adivinarLetra);
    button.style('font-size', '25px');
    button.style('background-color', '# F2F2FC');
    button.style('font-family', 'sofia-pro-soft');
    button.style('padding', '20px');
    button.style('border', 'none');
    button.style('border-radius', '100px');

    let input = createInput('');
    //input.center("horizontal", "vertical");
    input.position(850,1180);
    input.size(50);
    input.id('adivinanza');
    input.style('font-size', '50px');
    input.style('color', 'black');
    input.style('font-family', 'sofia-pro-soft');
    input.style('padding', '20px');
    input.style('border', 'none');
    input.style('border-radius', '20px');

    //lobito = new p5.Element(elt, lobitoNormal);
    frameRate(20);
}


function adivinarLetra(){
    let letra = document.querySelector('#adivinanza').value;
    let contador = 0; // 
    for(let i=0; i<palabras[indiceNivel].length; i++){
        if(palabras[indiceNivel][i]==letra){
            pista[i] = letra;
        } else{
            contador += 1;
        }
    }
    if(contador == palabras[indiceNivel].length){
        intentos += 1;
        frameInicio = frameCount;
        lobitoNormalX += 1000;
        setTimeout(function() {
            lobitoNormalX -= 1000;
        }, 2400);
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
    text(construccionPista, 0, 450, 625, 200);
} 

function terminoJuego(){

    let pistaString;
    pistaString = pista.join("");

    if(pistaString == palabras[indiceNivel]){
        return true;
    } else {
        return false;
    }
}

function draw(){
    background('#ccd56d');
    image(fondo, 0, 0, 625, 500);
    dibujarPista();
    image(lobitoNormal, lobitoNormalX, 360, 66, 125);
    console.log(lobitoNormalX);

    switch (indiceNivel) {
        case 0:
        image(nubeImg, 400, 80, 150, 140);    
        image(zanahoriaImg, 430, 100, 100, 100);
            break;
        
        case 1:
            image(nubeImg, 400, 80, 150, 140);    
            image(cerezaImg, 430, 100, 100, 100);
            break;

        case 2:
            image(nubeImg, 400, 80, 150, 140);    
            image(girasolImg, 430, 100, 100, 100);
            break;

        case 3:
            image(nubeImg, 400, 80, 150, 140);    
            image(jirafaImg, 430, 100, 100, 110);
            break;
          
        case 4:
            image(nubeImg, 400, 80, 150, 140);    
            image(ovejaImg, 430, 100, 110, 100);
            break;
      }

    if (intentos == 0){
        image(casita1, 60, 250, 350, 250);
    }

    if (intentos == 1){
        if(frameCount < frameInicio + 50){
            image(lobitoSoplando, lobitoSoplandoX, 360, 100, 125); 
        }
        image(casita2, 60, 250, 350, 250);
    }

    if (intentos == 2){
        if(frameCount < frameInicio + 50){
            image(lobitoSoplando, lobitoSoplandoX, 360, 97, 125); 
        }
        image(casita3, 60, 250, 350, 250);
        textSize(35);
        //textAlign(CENTER, CENTER);
        text(textoPerder, 80, 100, 450, 200);
        button.hide();
    }

    if(terminoJuego()){
        intentos = 0;
        indiceNivel++;
        pista = new Array (palabras[indiceNivel].length);
        pistaString = "";
        textSize(35);
    }
}