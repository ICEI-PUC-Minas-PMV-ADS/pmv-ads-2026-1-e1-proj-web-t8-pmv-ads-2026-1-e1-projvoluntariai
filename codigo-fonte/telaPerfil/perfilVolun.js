// Verifica login
const usuarioLogado =
    JSON.parse(localStorage.getItem("loggedUser"));

if (!usuarioLogado) {

    window.location.href =
        "../telaLogin/login.html";

}


// Nome da sidebar
document.querySelector(
    ".perfil p"
).innerText =
    usuarioLogado.nome;


// Nome principal
document.querySelector(
    ".textousu h2"
).innerText =
    usuarioLogado.nome;


// Tipo de perfil
document.querySelector(
    ".textousu p"
).innerText =
    usuarioLogado.categoria ||
    usuarioLogado.perfil;


// Apresentação
const apresentacao =
    document.querySelector(
        ".caixa"
    );

if (
    usuarioLogado.apresentacao
) {

    apresentacao.innerText =
        usuarioLogado.apresentacao;

}


// Disponibilidade
const disponibilidade =
    document.querySelector(
        ".lilcaixa"
    );

if (
    usuarioLogado.disponibilidade
) {

    disponibilidade.innerText =
        usuarioLogado.disponibilidade;

}


// Habilidades
const habilidades =
    document.querySelector(
        ".caixa2"
    );

if (
    usuarioLogado.habilidades
) {

    habilidades.innerText =
        usuarioLogado.habilidades;

}


// Banner

   const banner =
    document.querySelector(
        ".banner"
    );

if (usuarioLogado.banner) {

    banner.style.backgroundImage =
        `url(${usuarioLogado.banner})`;

    banner.style.backgroundSize =
        "cover";

    banner.style.backgroundPosition =
        "center";

}




// Foto
if (usuarioLogado.foto) {

   document.querySelector(
    ".fotoperfil"
).innerHTML =
    `<img src="${usuarioLogado.foto}" alt="Foto de Perfil">`;

document.querySelector(
    ".foto"
).innerHTML =
    `<img src="${usuarioLogado.foto}" alt="Foto de Perfil">`;

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
            "perfilVolun.html";

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