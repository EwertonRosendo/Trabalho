const imagens = document.getElementById("imagens");
const ibagens = document.querySelectorAll("#imagens .imagem");

let contador = 0;

function carrossel(){
    contador++;

    if(contador > ibagens.length - 1){
        contador = 0;
    }

    imagens.style.transform = `translateX(${-contador * 1200}px)`;

}

setInterval(carrossel,5000);

function goLeft() {
    contador--;    
    if (contador < 0) {
      contador = ibagens.length - 1;
    }    
    imagens.style.transform = `translateX(${-contador * 1200}px)`;
  }

  function goRight() {
    contador++;    
    if (contador > ibagens.length - 1) {
      contador = 0;
    }    
    imagens.style.transform = `translateX(${contador * -1200}px)`;
  }