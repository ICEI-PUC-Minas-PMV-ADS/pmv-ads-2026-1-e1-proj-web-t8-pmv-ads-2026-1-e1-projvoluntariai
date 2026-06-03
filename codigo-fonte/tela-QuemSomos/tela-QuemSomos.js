const botaoVoluntario = document.querySelector(".btn-voluntario");

botaoVoluntario.addEventListener("click", () => {

    alert("Vamos encontrar uma vaga para você!");

     const usuarioLogado =
    JSON.parse(localStorage.getItem("loggedUser"));

    // Não está logado
    if(!usuarioLogado){

        window.location.href =
        "../telaLogin/login.html";

    }

 else{
    window.location.href="../TelaVagasVoluntario/Vagas.html"
 }

    
});
const btnPerfil = document.getElementById("btnPerfil");

btnPerfil.addEventListener("click", function(event){

    event.preventDefault();

    const usuarioLogado =
    JSON.parse(localStorage.getItem("loggedUser"));

    // Não está logado
    if(!usuarioLogado){

        window.location.href =
        "../telaLogin/login.html";

        return;
    }

    // ONG
    if(usuarioLogado.perfil === "ONG"){

        window.location.href =
        "../telaPerfil/PerfilONG.html";

    }

    else {

        window.location.href =
        "../telaPerfil/perfilVolun.html";

    }

});