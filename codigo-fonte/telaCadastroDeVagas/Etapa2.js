const botao = document.getElementById("btnConcluído");

botao.addEventListener("click", function(event) {

    event.preventDefault();

    const vaga = document.getElementById("vaga");
    const atividades = document.getElementById("atividades");
    const requisitos = document.getElementById("requisitos");

    const erroVaga = document.getElementById("erroVaga");
    const erroAtividades = document.getElementById("erroAtividades");
    const erroRequisitos = document.getElementById("erroRequisitos");

    let valido = true;

    // limpa erros antes
    erroVaga.textContent = "";
    erroAtividades.textContent = "";
    erroRequisitos.textContent = "";

    vaga.classList.remove("input-erro");
    atividades.classList.remove("input-erro");
    requisitos.classList.remove("input-erro");

    if (vaga.value === "") {
        erroVaga.textContent = "Preencha este campo";
        vaga.classList.add("input-erro");
        valido = false;
    }

    if (atividades.value === "") {
        erroAtividades.textContent = "Preencha este campo";
        atividades.classList.add("input-erro");
        valido = false;
    }

    if (requisitos.value === "") {
        erroRequisitos.textContent = "Preencha este campo";
        requisitos.classList.add("input-erro");
        valido = false;
    }

    if (valido) {

    let novaVaga = JSON.parse(
        localStorage.getItem("novaVaga")
    );

    novaVaga.descricao = vaga.value;
    novaVaga.atividades = atividades.value;
    novaVaga.requisitos = requisitos.value;

    localStorage.setItem(
        "novaVaga",
        JSON.stringify(novaVaga)
    );

    alert("Etapa Concluída!");

    window.location.href = "etaoa2C.html";
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