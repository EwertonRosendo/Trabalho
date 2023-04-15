let usuarios = []

if (localStorage.getItem('cadastrados')) {
  usuarios = JSON.parse(localStorage.getItem('cadastrados'));
}

function teste(){
    alert('teste')
}

let erros = document.getElementsByClassName('erros')

function cadastrar(){
    
    let email = document.getElementById("email").value.trim()  //transformar o email recebino em low case
    const senha = document.getElementById("senha").value
    const nome = document.getElementById("nome").value.trim()    //tranformar o nome recebido em low case
    const cpf = document.getElementById("cpf").value.trim()
    const dataNascimento = document.getElementById("dataNascimento").value

    
    
    /*
    - colocar os avisos de erro de input
    
    - colocar o aviso de cadastro realizado

    - Os avisos sobre os caracteres(se a menos, ou a mais) devem
      aparecer com o texto vermelho abaixo do input
    
      - adicionar a função .trim()
    */
    
    
    //area neutra
    //verificarConta(email, cpf)
    //verificamos se a conta existe

    if(nome.length<3){
        erros[1].innerHTML = ('O nome deve ter no minimo 3 caracteres')
        alert("O minimo de caracteres é 3 para seu nome")
    }else{
        if(senha.length<3 || senha.length>10){
            erros[0].innerHTML = ('sua senha deve ter entre 3 e 10 digitos')
            alert("o minimo de caracteres para senha é 6 e o maximo é 10")
        } else{
            if((cpf.length != 11) || !Number.isInteger(Number(cpf))){
                erros[2].innerHTML = ('Seu cpf deve ter exatamente 11 numeros')
                alert("Seu cpf deve ter 11 numeros, e sem letras")
            }else{
                if(validateEmail(email)){

                    let cadastrados = JSON.parse(localStorage.getItem("cadastrados"))

                    let email = document.getElementById("email").value  //transformar o email recebino em low case
                    
                    //redirecionar para pagina de home quando o login for feito
                    let isCadastrado = false
                    
                    for(let i=0; i<cadastrados.length; i++){
                        
                        if (cadastrados[i]['email'] == email || cadastrados[i]['cpf']==cpf){
                            isCadastrado = true
                            alert("Conta já existe")
                            break
                        }
                        
                    }
                    if(!isCadastrado){
                        let usuario = {email:email, senha:senha, nome:nome, cpf:cpf, dataNascimento:dataNascimento, dataCriacao:new Date}
    
                        usuarios.push(usuario)
    
                        localStorage.setItem('cadastrados', JSON.stringify(usuarios))
                    }
                    //window.location.href = 'index.html'
                
                }
            }
        }
    }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
/*


function verificarConta(email, cpf){
    let cadastrados = JSON.parse(localStorage.getItem("cadastrados"))

    let email = document.getElementById("email").value  //transformar o email recebino em low case
    
    //redirecionar para pagina de home quando o login for feito

    for(let i=0; i<cadastrados.length; i++){
        
        if (cadastrados[i]['email'] == email || cadastrados[i]['cpf']==cpf){

            alert("Conta já existe")
            break
        }
    }
}
*/



