// Variables globales
let ositoX = 0;
let osito1;
let osito2;
let quesitoComa;
let quesitoDosPuntos;
let quesitoPuntoYComa;
let respuestas = [1, 2, 3];
let respuestaCorrecta;
let oraciones  = 1;
let fondo;
let texto1 = "Faltan cinco minutos para las \n 8[]40AM.";
let ordenIngredientes;

function preload(){
    osito1 = loadImage('img/osito1.png');
    osito2 = loadImage('img/osito2.png');
    questioComa = loadImage('img/quesitoComa.png');
    quesitoDosPuntos = loadImage('img/quesitoDosPuntos.png');
    quesitoPuntoYComa = loadImage('img/quesitoPuntoYComa.png');
    fondo = loadImage('img/fondo.PNG')
}

function setup(){
    background('#17E2FE');
    createCanvas(600, 700);
    respuestas = respuestas.sort(() => Math.random() - 0.5);
    let respuestaCorrecta = respuestas.indexOf(1);
    //ordenarQuesitos();
}

/*function ordenarQuesitos(){
    for(let i = 0; i < 3; i++){
        if(respuestas[i] == 1 ){
            append (ordenIngredientes, quesitoDosPuntos);
        }
        if(respuestas[i] == 2 ){
            append (ordenIngredientes, quesitoComa);
        }
        if(respuestas[i] == 3 ){
            append (ordenIngredientes, quesitoPuntoYComa);
        }
    }

    console.log(ordenIngredientes);
}*/

function draw(){
    background('#17E2FE');
    image(fondo, 0, 200, 625, 500);
    fill(255,255,255);
    textSize(35);
    textAlign(CENTER, CENTER);
    text(texto1, 0, 0, 625, 200);
    image(osito1, ositoX, 450, 200, 225);

    button = createButton('Empezar');
    button.position(880, 1200);
    button.style('font-size', '25px');
    button.style('background-color', '# F2F2FC');
    button.style('font-family', 'sofia-pro-soft');
    button.style('padding', '20px');
    button.style('border', 'none');
    button.style('border-radius', '100px');
}

function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        if(ositoX < 300){
            ositoX += 150;
        }
    }
    
    if (keyCode === LEFT_ARROW) {
        if(ositoX > 0){
            ositoX -= 150;
        }
    }
  }