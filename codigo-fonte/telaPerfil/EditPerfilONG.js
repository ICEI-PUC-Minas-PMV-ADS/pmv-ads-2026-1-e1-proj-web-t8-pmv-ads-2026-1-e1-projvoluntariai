const botaoSalvar =
    document.getElementById("btnSalvar");


// INPUTS
const inputNome =
    document.getElementById("inputNomeONG");

const inputApresentacao =
    document.getElementById("inputApresentacao");

const inputTrabalhos =
    document.getElementById("inputTrabalhos");

const inputAtuacao =
    document.getElementById("inputAtuacao");


// BANNER
const bannerONG =
    document.getElementById("bannerONG");

const inputBanner =
    document.getElementById("inputBanner");


// FOTO PERFIL
const fotoPerfil =
    document.getElementById("fotoPerfilPrincipal");

const inputFotoPerfil =
    document.getElementById("inputFotoPerfil");



// CLICAR NO BANNER
bannerONG.addEventListener("click", function () {

    inputBanner.click();

});


// CLICAR NA FOTO
fotoPerfil.addEventListener("click", function (event) {

    event.stopPropagation();

    inputFotoPerfil.click();

});




// ALTERAR BANNER
inputBanner.addEventListener("change", function () {

    const arquivo =
        inputBanner.files[0];

    if (arquivo) {

        const leitor =
            new FileReader();

        leitor.onload = function (e) {

            const imagem =
                e.target.result;

            bannerONG.style.backgroundImage =
                `url(${imagem})`;

            bannerONG.style.backgroundSize =
                "cover";

            bannerONG.style.backgroundPosition =
                "center";

            localStorage.setItem(
                "bannerONG",
                imagem
            );

        };

        leitor.readAsDataURL(arquivo);

    }

});




// ALTERAR FOTO PERFIL
inputFotoPerfil.addEventListener("change", function () {

    const arquivo =
        inputFotoPerfil.files[0];

    if (arquivo) {

        const leitor =
            new FileReader();

        leitor.onload = function (e) {

            const imagem =
                e.target.result;

            fotoPerfil.innerHTML =
                `<img src="${imagem}">`;

            localStorage.setItem(
                "fotoPerfilONG",
                imagem
            );

        };

        leitor.readAsDataURL(arquivo);

    }

});




// SALVAR PERFIL
botaoSalvar.addEventListener("click", function () {

    localStorage.setItem(
        "nomeONG",
        inputNome.value
    );

    localStorage.setItem(
        "apresentacaoONG",
        inputApresentacao.value
    );

    localStorage.setItem(
        "trabalhosONG",
        inputTrabalhos.value
    );

    localStorage.setItem(
        "atuacaoONG",
        inputAtuacao.value
    );

    alert("Perfil atualizado com sucesso!");

    window.location.href =
        "PerfilONG.html";

});