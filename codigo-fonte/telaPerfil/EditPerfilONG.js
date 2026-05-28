const botaoSalvar =
    document.getElementById("btnSalvar");

botaoSalvar.addEventListener("click", function () {

    const apresentacao =
        document.getElementById("inputApresentacao").value;
    
    const trabalhos = 
        document.getElementById("inputTrabalhos").value;

    const atuacao =
        document.getElementById("inputAtuacao").value;

    localStorage.setItem(
        "apresentacaoONG",
        apresentacao
    );

    localStorage.setItem(
        "trabalhosONG",
        trabalhos
    );

    localStorage.setItem(
        "atuacaoONG",
        atuacao
    );

    alert("Perfil atualizado com sucesso!");

    window.location.href = "PerfilONG.html";

});