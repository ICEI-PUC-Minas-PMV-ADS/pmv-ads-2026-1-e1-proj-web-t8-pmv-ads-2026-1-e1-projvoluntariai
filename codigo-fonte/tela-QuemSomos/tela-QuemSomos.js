const botaoVoluntario = document.querySelector(".btn-voluntario");

botaoVoluntario.addEventListener("click", () => {

    alert("Vamos encontrar uma vaga para você,mas antes faça seu cadastro!");

    window.location.href =
    "../tela-fluxocadastro/pagina-cadastroVoluntario.html";

});