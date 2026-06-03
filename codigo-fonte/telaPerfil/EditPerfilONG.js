const botaoSalvar =
    document.getElementById("btnSalvar");

const inputFotos =
    document.getElementById("inputFotos");

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


// BOTÕES REMOVER
const btnRemoverBanner =
    document.getElementById("btnRemoverBanner");

const btnRemoverFotoPerfil =
    document.getElementById("btnRemoverFotoPerfil");


// CARREGAR BANNER SALVO
const bannerSalvo =
    localStorage.getItem("bannerONG");

if (bannerSalvo) {

    bannerONG.style.backgroundImage =
        `url(${bannerSalvo})`;

    bannerONG.style.backgroundSize =
        "cover";

    bannerONG.style.backgroundPosition =
        "center";

}


// CARREGAR FOTO SALVA
const fotoSalva =
    localStorage.getItem("fotoPerfilONG");

if (fotoSalva) {

    fotoPerfil.innerHTML =
        `<img src="${fotoSalva}" alt="Foto de Perfil">`;

}



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


// REMOVER BANNER
btnRemoverBanner.addEventListener("click", function (event) {

    event.stopPropagation();

    localStorage.removeItem(
        "bannerONG"
    );

    bannerONG.style.backgroundImage =
        "";

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


// REMOVER FOTO PERFIL
btnRemoverFotoPerfil.addEventListener("click", function (event) {

    event.stopPropagation();

    localStorage.removeItem(
        "fotoPerfilONG"
    );

    fotoPerfil.innerHTML =
        `
        <button id="btnRemoverFotoPerfil">
            Remover Foto
        </button>

        <input
            type="file"
            id="inputFotoPerfil"
            accept="image/*"
            hidden>

        <i class="fa-solid fa-user"></i>
        `;

    location.reload();

});



botaoSalvar.addEventListener("click", function () {

    // SALVAR TEXTO
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



    // SALVAR FOTOS GALERIA
    const arquivos =
        inputFotos.files;

    const fotosBase64 = [];

    let contador = 0;



    // SE TIVER FOTOS
    if (arquivos.length > 0) {

        for (let i = 0; i < arquivos.length; i++) {

            const leitor =
                new FileReader();

            leitor.onload = function(e) {

                fotosBase64.push(
                    e.target.result
                );

                contador++;

                // TERMINOU TODAS
                if (contador === arquivos.length) {

                    localStorage.setItem(
                        "fotosONG",
                        JSON.stringify(fotosBase64)
                    );

                    finalizarSalvamento();

                }

            };

            leitor.readAsDataURL(
                arquivos[i]
            );

        }

    }

    else {

        finalizarSalvamento();

    }

});




// FINALIZAR
function finalizarSalvamento() {

    alert(
        "Perfil atualizado com sucesso!"
    );

    window.location.href =
        "PerfilONG.html";

}
