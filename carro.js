let xCarros = [420, 600, 600]
let yCarros = [40,96,150];
let velocidadeCarros = [2, 2.5, 3.2]

function mostraCarro(){
  for (let i=0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
  }
}

function movimentaCarro(){
  for (let i=0; i < imagemCarros.length; i++){
      xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoIncialDoCarro(){
  for (let i=0; i < imagemCarros.length; i++){
    if (passouTodaATela (xCarros[i])){
      xCarros[i] = 600;
    }
  }
 
}


function passouTodaATela(xCarro){
  return xCarros < -50;
}