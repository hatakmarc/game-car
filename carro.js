
//carro
let xCarro = 600;
let yCarro = 40;
let 
//carro2
let xCarro2 = 580;
let yCarro2 = 96;

//carro3
let xCarro3 = 600;
let yCarro3 = 150;

function mostraCarro(){
   image(imagemCarro, xCarro, yCarro, 50, 40)
   image(imagemCarro2, xCarro2, yCarro2, 50, 40)
  image(imagemCarro3, xCarro3, yCarro3, 50, 40)
}
function movimentaCarro(){
  xCarro -= 2;
  xCarro2 -= 3;
  xCarro3 -= 2.5;
}