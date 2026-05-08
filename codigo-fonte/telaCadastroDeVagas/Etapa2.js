const botao = document.getElementById("btnConcluído");

botao.addEventListener("click", function() {

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

   // if (valido) {
    //    alert("Etapa Concluída!");
    //    window.location.href = "pmv-ads-2026-1-e1-proj-web-t8-pmv-ads-2026-1-e1-projvoluntariai/codigo-fonte/telaCadastroDeVagas/etapa2C.html";

    //}

}); 