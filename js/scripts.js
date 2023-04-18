function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "/img/menu_white_36dp.svg";
        
        tirarCor()

    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "/img/close_white_36dp.svg";

        mudarCor()
    }
}

function exibir(){
    let emailStorage = localStorage.getItem("email")
    let passwordStorage = localStorage.getItem("password")

    let paragrafo = document.getElementById('exibir')

    console.log("User: ", emailStorage, "Senha: ", passwordStorage)

    let dados = {"User": emailStorage," Senha": passwordStorage}

    paragrafo.innerHTML = JSON.stringify(dados)
}
exibir()

// carrossel e footer abaixo

const imagens = document.getElementById("imagens");
const ibagens = document.querySelectorAll("#imagens .imagem");

let contador = 0;

function carrossel(){
    contador++;

    if(contador > ibagens.length - 1){
        contador = 0;
    }

    imagens.style.transform = `translateX(${-contador * 500}px)`;

}

setInterval(carrossel,4000);

function goLeft() {
    contador--;    
    if (contador < 0) {
      contador = ibagens.length - 1;
    }    
    imagens.style.transform = `translateX(${-contador * 500}px)`;
  }

  function goRight() {
    contador++;    
    if (contador > ibagens.length - 1) {
      contador = 0;
    }    
    imagens.style.transform = `translateX(${contador * -500}px)`;
  }