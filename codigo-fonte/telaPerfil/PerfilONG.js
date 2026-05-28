const apresentacaoSalva =
    localStorage.getItem("apresentacaoONG");

const atuacaoSalva =
    localStorage.getItem("atuacaoONG");

    
if (apresentacaoSalva) {

    document.getElementById("apresentacaoTexto")
        .innerText = apresentacaoSalva;
}

if (atuacaoSalva) {

    document.getElementById("atuacaoTexto")
        .innerText = atuacaoSalva;
}