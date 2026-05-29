const apresentacaoSalva =
    localStorage.getItem("apresentacaoONG");

const trabalhosSalvos =
    localStorage.getItem("trabalhosONG");
    
const atuacaoSalva =
    localStorage.getItem("atuacaoONG");


if (apresentacaoSalva) {

    document.getElementById("apresentacaoTexto")
        .innerText = apresentacaoSalva;
}

if (trabalhosSalvos) {

    document.getElementById(
        "trabalhosTexto"
    ).innerText = trabalhosSalvos;
}


// TAGS
const containerTags =
    document.getElementById("atuacaoTexto");

if (atuacaoSalva) {

    const listaTags =
        atuacaoSalva.split(",");

    listaTags.forEach(function(tag) {

        const novaTag =
            document.createElement("div");

        novaTag.classList.add("tag");

        novaTag.innerText = tag.trim();

        containerTags.appendChild(novaTag);

    });

}