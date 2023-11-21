function validaFormulario2(){

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmacao = document.getElementById("confirmacao").value;

    //validação dos campos
    if(nome === "" || email === "" || senha === "" || confirmacao === ""){
        alert("ERRO...\nInsira o que é pedido.")
        return
    }

    //Validação do campo de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]=$/
    if (!emailRegex.test(email)) {
        alert("E-mail digitado não é válido")
        return
    }

    //Validação do campo da senha
    if (senha.lenght > 8) {
        alert("Senha inválida por conter menos de 8 carcteres.")
        return
    }
    //Validação do campo de  confirmação de senha
    if(confirmacao !== senha){
        alert("Senha de confirmação inválida.")
        return
    }

    alert("Cadastro realizado!")

    function modoEscuro(){
        
    }
}