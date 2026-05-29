// NOME ONG
const nomeSalvo =
    localStorage.getItem("nomeONG");

if (nomeSalvo) {

    document.getElementById(
        "nomeONGPrincipal"
    ).innerText = nomeSalvo;

    document.getElementById(
        "nomeONGSidebar"
    ).innerText = nomeSalvo;

}



// APRESENTAÇÃO
const apresentacaoSalva =
    localStorage.getItem("apresentacaoONG");

if (apresentacaoSalva) {

    document.getElementById(
        "apresentacaoTexto"
    ).innerText = apresentacaoSalva;

}



// TRABALHOS
const trabalhosSalvos =
    localStorage.getItem("trabalhosONG");

if (trabalhosSalvos) {

    document.getElementById(
        "trabalhosTexto"
    ).innerText = trabalhosSalvos;

}



// TAGS
const atuacaoSalva =
    localStorage.getItem("atuacaoONG");

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



// BANNER
const bannerSalvo =
    localStorage.getItem("bannerONG");

const banner =
    document.getElementById("bannerONG");

if (bannerSalvo) {

    banner.style.backgroundImage =
        `url(${bannerSalvo})`;

    banner.style.backgroundSize =
        "cover";

    banner.style.backgroundPosition =
        "center";

}



// FOTO PERFIL
const fotoSalva =
    localStorage.getItem("fotoPerfilONG");

if (fotoSalva) {

    document.getElementById(
        "fotoPerfilPrincipal"
    ).innerHTML =
        `<img src="${fotoSalva}">`;


    document.getElementById(
        "fotoPerfilSidebar"
    ).innerHTML =
        `<img src="${fotoSalva}">`;

}

// FOTOS GALERIA
const fotosSalvas =
    JSON.parse(
        localStorage.getItem("fotosONG")
    );

const galeria =
    document.getElementById("galeriaFotos");

if (fotosSalvas) {

    fotosSalvas.forEach(function(foto) {

        const novaImagem =
            document.createElement("img");

        novaImagem.src = foto;

        novaImagem.classList.add(
            "fotoGaleria"
        );

        galeria.appendChild(
            novaImagem
        );

    });

}