// =====================================
// ELEMENTOS DA PÁGINA
// =====================================

const inputNomeONG =
    document.getElementById("inputNomeONG");

    const inputinfo =
    document.getElementById("inputinfo")

const inputApresentacao =
    document.getElementById("inputApresentacao");

const inputTrabalhos =
    document.getElementById("inputTrabalhos");

const inputAtuacao =
    document.getElementById("inputAtuacao");

const inputFotos =
    document.getElementById("inputFotos");

const btnSalvar =
    document.getElementById("btnSalvar");

    const btnvoltar =
    document.getElementById("btnvoltar");

const bannerONG =
    document.getElementById("bannerONG");

const inputBanner =
    document.getElementById("inputBanner");

const fotoPerfil =
    document.getElementById("fotoPerfilPrincipal");

const inputFotoPerfil =
    document.getElementById("inputFotoPerfil");

const btnRemoverBanner =
    document.getElementById("btnRemoverBanner");

const btnRemoverFotoPerfil =
    document.getElementById("btnRemoverFotoPerfil");

const nomeSidebar =
    document.getElementById("nomeSidebar");

const fotoSidebar =
    document.querySelector(".perfil .foto");


// =====================================
// USUÁRIO LOGADO
// =====================================

let usuarioLogado =
    JSON.parse(
        localStorage.getItem("loggedUser")
    );

if (!usuarioLogado) {

    alert("Nenhum usuário logado.");

    window.location.href =
        "../telaLogin/login.html";
}


// =====================================
// CARREGAR DADOS
// =====================================

inputNomeONG.value =
    usuarioLogado.nome || "";

    inputinfo.value =
    usuarioLogado.info || "";

inputApresentacao.value =
    usuarioLogado.apresentacao || "";

inputTrabalhos.value =
    usuarioLogado.nossostrabalhos || "";

inputAtuacao.value =
    usuarioLogado.area || "";

nomeSidebar.innerText =
    usuarioLogado.nome || "ONG";


// =====================================
// CARREGAR BANNER
// =====================================

if (usuarioLogado.banner) {

    bannerONG.style.backgroundImage =
        `url(${usuarioLogado.banner})`;

    bannerONG.style.backgroundSize =
        "cover";

    bannerONG.style.backgroundPosition =
        "center";
}


// =====================================
// CARREGAR FOTO
// =====================================

if (usuarioLogado.foto) {

    fotoPerfil.innerHTML =
        `<img src="${usuarioLogado.foto}" alt="Foto da ONG">`;

    fotoSidebar.innerHTML =
        `<img src="${usuarioLogado.foto}" alt="Foto da ONG">`;

}


// =====================================
// CLICAR NO BANNER
// =====================================

bannerONG.addEventListener(
    "click",
    function(event){

        if (
            event.target === btnRemoverBanner ||
            event.target === btnRemoverFotoPerfil
        ) {
            return;
        }

        inputBanner.click();

    }
);


// =====================================
// CLICAR NA FOTO
// =====================================

fotoPerfil.addEventListener(
    "click",
    function(event){

        event.stopPropagation();

        inputFotoPerfil.click();

    }
);


// =====================================
// ALTERAR BANNER
// =====================================

inputBanner.addEventListener(
    "change",
    function(){

        const arquivo =
            inputBanner.files[0];

        if (!arquivo) return;

        const leitor =
            new FileReader();

        leitor.onload =
            function(e){

                const imagem =
                    e.target.result;

                bannerONG.style.backgroundImage =
                    `url(${imagem})`;

                bannerONG.style.backgroundSize =
                    "cover";

                bannerONG.style.backgroundPosition =
                    "center";

                usuarioLogado.banner =
                    imagem;

                salvarUsuario();

            };

        leitor.readAsDataURL(
            arquivo
        );

    }
);


// =====================================
// REMOVER BANNER
// =====================================

btnRemoverBanner.addEventListener(
    "click",
    function(event){

        event.stopPropagation();

        usuarioLogado.banner = "";

        bannerONG.style.backgroundImage =
            "";

        salvarUsuario();

    }
);


// =====================================
// ALTERAR FOTO
// =====================================

inputFotoPerfil.addEventListener(
    "change",
    function(){

        const arquivo =
            inputFotoPerfil.files[0];

        if (!arquivo) return;

        const leitor =
            new FileReader();

        leitor.onload =
            function(e){

                const imagem =
                    e.target.result;

                fotoPerfil.innerHTML =
                    `<img src="${imagem}" alt="Foto da ONG">`;

                fotoSidebar.innerHTML =
                    `<img src="${imagem}" alt="Foto da ONG">`;

                usuarioLogado.foto =
                    imagem;

                salvarUsuario();

            };

        leitor.readAsDataURL(
            arquivo
        );

    }
);


// =====================================
// REMOVER FOTO
// =====================================

btnRemoverFotoPerfil.addEventListener(
    "click",
    function(event){

        event.stopPropagation();

        usuarioLogado.foto = "";

        inputFotoPerfil.value = "";

        fotoPerfil.innerHTML =
            `<i class="fa-solid fa-user"></i>`;

        fotoSidebar.innerHTML =
            `<i class="fa-solid fa-user"></i>`;

        salvarUsuario();

    }
);


// =====================================
// GALERIA DE FOTOS
// =====================================

inputFotos.addEventListener(
    "change",
    function(){

        const arquivos =
            Array.from(inputFotos.files);

        if (arquivos.length === 0)
            return;

        usuarioLogado.galeria = [];

        let imagensCarregadas = 0;

        arquivos.forEach(arquivo => {

            const leitor =
                new FileReader();

            leitor.onload =
                function(e){

                    usuarioLogado.galeria.push(
                        e.target.result
                    );

                    imagensCarregadas++;

                    if (
                        imagensCarregadas ===
                        arquivos.length
                    ) {

                        salvarUsuario();

                    }

                };

            leitor.readAsDataURL(
                arquivo
            );

        });

    }
);


// =====================================
// SALVAR ALTERAÇÕES
// =====================================

btnSalvar.addEventListener(
    "click",
    function(){

        usuarioLogado.nome =
            inputNomeONG.value.trim();

            usuarioLogado.info =
            inputinfo.value.trim()

        nomeSidebar.innerText =
            usuarioLogado.nome;

        usuarioLogado.apresentacao =
            inputApresentacao.value.trim();

        usuarioLogado.nossostrabalhos =
            inputTrabalhos.value.trim();

        usuarioLogado.area =
            inputAtuacao.value.trim();

        salvarUsuario();

        alert(
            "Perfil atualizado com sucesso!"
        );

        window.location.href =
            "PerfilONG.html";

    }
);

//voltar//

btnvoltar.addEventListener(
    "click", () => {
    window.location.href =
    "PerfilONG.html";
    }
);


// =====================================
// SALVAR LOCAL STORAGE
// =====================================

function salvarUsuario() {

    localStorage.setItem(
        "loggedUser",
        JSON.stringify(
            usuarioLogado
        )
    );

    const users =
        JSON.parse(
            localStorage.getItem("users")
        ) || [];

    const indice =
        users.findIndex(
            user =>
                user.email ===
                usuarioLogado.email
        );

    if (indice !== -1) {

        users[indice] =
            usuarioLogado;

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );

    }

}