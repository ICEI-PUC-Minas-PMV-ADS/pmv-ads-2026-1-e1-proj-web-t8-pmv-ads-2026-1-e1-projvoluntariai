const botao = document.getElementById("btnConcluído");

botao.addEventListener("click", function(event) {

    event.preventDefault();

    const data1 = document.getElementById("data1");
    const data2 = document.getElementById("data2");
    const hora = document.getElementById("hora");

    const errodata1 = document.getElementById("errodata1");
    const errodata2 = document.getElementById("errodata2");
    const errohora = document.getElementById("errohora");

    let valido = true;

    // limpa erros antes
    errodata1.textContent = "";
    errodata2.textContent = "";
    errohora.textContent = "";

    data1.classList.remove("input-erro");
    data2.classList.remove("input-erro");
    hora.classList.remove("input-erro");

    if (data1.value === "") {
        errodata1.textContent = "Preencha este campo";
        data1.classList.add("input-erro");
        valido = false;
    }

    if (data2.value === "") {
        errodata2.textContent = "Preencha este campo";
        data2.classList.add("input-erro");
        valido = false;
    }

    if (hora.value === "") {
        errohora.textContent = "Preencha este campo";
        hora.classList.add("input-erro");
        valido = false;
    }


    if (valido) {
        alert("Etapa Concluída!");
        window.location.href = "";
    }

});