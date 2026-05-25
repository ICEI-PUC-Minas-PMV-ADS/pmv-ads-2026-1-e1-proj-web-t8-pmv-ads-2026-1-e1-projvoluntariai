const botao = document.getElementById("btnConcluído");

botao.addEventListener("click", function(event) {

    event.preventDefault();

    const vaga = document.getElementById("vaga");
    const modalidade = document.getElementById("modalidade");
    const localizacao = document.getElementById("localizacao");
    const ndevagas = document.getElementById("ndevagas")

    const erroVaga = document.getElementById("erroVaga");
    const erroModalidade = document.getElementById("erroModalidade");
    const errolocalizacao = document.getElementById("errolocalizacao");
    const errondevagas = document.getElementById("errondevagas")

    let valido = true;

    // limpa erros antes
    erroVaga.textContent = "";
    erroModalidade.textContent = "";
    errolocalizacao.textContent = "";
     errondevagas.textContent = "";

    vaga.classList.remove("input-erro");
    modalidade.classList.remove("input-erro");
    localizacao.classList.remove("input-erro");
    ndevagas.classList.remove("input-erro");

    if (vaga.value === "") {
        erroVaga.textContent = "Preencha este campo";
        vaga.classList.add("input-erro");
        valido = false;
    }

    if (modalidade.value === "") {
        erroModalidade.textContent = "Preencha este campo";
        modalidade.classList.add("input-erro");
        valido = false;
    }

    if (localizacao.value === "") {
        errolocalizacao.textContent = "Preencha este campo";
        localizacao.classList.add("input-erro");
        valido = false;
    }

 if (ndevagas.value === "") {
        errondevagas.textContent = "Preencha este campo";
        ndevagas.classList.add("input-erro");
        valido = false;
    }

    if (valido) {
        const novaVaga = {

        titulo: vaga.value,
        modalidade: modalidade.value,
        localizacao: localizacao.value,
        numeroVagas: ndevagas.value

    };

    localStorage.setItem(
        "novaVaga",
        JSON.stringify(novaVaga)
    );

    alert("Etapa Concluída!");

    window.location.href = "Etapa2.html";
}

});