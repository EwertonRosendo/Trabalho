let erros = document.getElementsByClassName('erros')

function login(){

    
    let email = document.getElementById("email").value.trim() 
    const senha = document.getElementById("senha").value

    let cadastrados = JSON.parse(localStorage.getItem("cadastrados"))
    
    for(let i=0; i<cadastrados.length; i++){
        
        if (cadastrados[i]['email'] == email && cadastrados[i]['senha']==senha){
            
            alert("login realizado")
            window.location.href = 'home.html'
            break
        }else{
            document.getElementsByClassName('erros')[0].innerHTML = ('Senha ou email incorretos') 
        }

    }
}






