function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "https://raw.githubusercontent.com/EwertonRosendo/Trabalho/d4bfe0b31dc52cdf604645c997d6c02f84765ba6/img/menu_white_36dp.svg";
        
        tirarCor()

    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "https://raw.githubusercontent.com/EwertonRosendo/Trabalho/d4bfe0b31dc52cdf604645c997d6c02f84765ba6/img/close_white_36dp.svg";

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
