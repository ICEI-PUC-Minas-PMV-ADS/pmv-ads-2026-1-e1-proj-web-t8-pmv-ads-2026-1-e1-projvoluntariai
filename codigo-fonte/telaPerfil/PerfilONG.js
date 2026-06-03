// Verifica se existe usuário logado
const usuarioLogado =
    JSON.parse(localStorage.getItem("loggedUser"));

if (!usuarioLogado) {

    window.location.href =
        "../telaLogin/login.html";

}

// Nome
document.getElementById(
    "nomeONGPrincipal"
).innerText = usuarioLogado.nome;

document.getElementById(
    "nomeONGSidebar"
).innerText = usuarioLogado.nome;


// Apresentação
if (usuarioLogado.apresentacao) {

    document.getElementById(
        "apresentacaoTexto"
    ).innerText =
        usuarioLogado.apresentacao;

}


// Trabalhos
if (usuarioLogado.nossostrabalhos) {

    document.getElementById(
        "trabalhosTexto"
    ).innerText =
        usuarioLogado.nossostrabalhos;

}


// Área de atuação
const containerTags =
    document.getElementById(
        "atuacaoTexto"
    );

if (usuarioLogado.area) {

    const tag =
        document.createElement("div");

    tag.classList.add("tag");

    tag.innerText =
        usuarioLogado.area;

    containerTags.appendChild(tag);

}


// Banner
if (usuarioLogado.banner) {

    const banner =
        document.getElementById(
            "bannerONG"
        );

    banner.style.backgroundImage =
        `url(${usuarioLogado.banner})`;

    banner.style.backgroundSize =
        "cover";

    banner.style.backgroundPosition =
        "center";

}


// Foto de perfil
if (usuarioLogado.foto) {

    document.getElementById(
        "fotoPerfilPrincipal"
    ).innerHTML =
        `<img src="${usuarioLogado.foto}">`;

    document.getElementById(
        "fotoPerfilSidebar"
    ).innerHTML =
        `<img src="${usuarioLogado.foto}">`;

}


// Botão Perfil
const btnPerfil =
    document.getElementById(
        "btnPerfil"
    );

btnPerfil.addEventListener(
    "click",
    function(event){

        event.preventDefault();

        window.location.href =
            "PerfilONG.html";

    }
);


// Sair
const btnSair =
    document.querySelector(
        ".sair a"
    );

btnSair.addEventListener(
    "click",
    function(event){

        event.preventDefault();

        localStorage.removeItem(
            "loggedUser"
        );

        window.location.href =
            "../telaLogin/login.html";

    }
);