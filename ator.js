//ator
let xAtor = 100;
let yAtor = 366;

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 30, 30)
}
function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 2;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 2;
  }
}