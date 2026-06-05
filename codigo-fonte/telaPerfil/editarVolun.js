// =====================================
// ELEMENTOS DA PÁGINA
// =====================================

const botaoSalvar =
    document.getElementById("btnSalvar");

const inputNome =
    document.getElementById("inputNomeVolun");

const inputApresentacao =
    document.getElementById("inputApresentacao");

const inputHabilidades =
    document.getElementById("habilidadeseint");

const inputCategoria =
    document.getElementById("inputCategoria");

const inputDisponibilidade =
    document.getElementById("inputDisponibilidade");

const bannerUsu =
    document.getElementById("bannerusu");

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
    document.getElementById("fotoSidebar");
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
// CARREGAR DADOS SALVOS
// =====================================

inputNome.value =
    usuarioLogado.nome || "";

inputApresentacao.value =
    usuarioLogado.apresentacao || "";

inputHabilidades.value =
    usuarioLogado.habilidades || "";

inputCategoria.value =
    usuarioLogado.categoria || "";

inputDisponibilidade.value =
    usuarioLogado.disponibilidade || "";

nomeSidebar.innerText =
    usuarioLogado.nome || "Usuário";


// =====================================
// CARREGAR BANNER
// =====================================

if (usuarioLogado.banner) {

    bannerUsu.style.backgroundImage =
        `url(${usuarioLogado.banner})`;

    bannerUsu.style.backgroundSize =
        "cover";

    bannerUsu.style.backgroundPosition =
        "center";
}


// =====================================
// CARREGAR FOTO
// =====================================

if (usuarioLogado.foto) {

    fotoPerfil.innerHTML =
        `<img src="${usuarioLogado.foto}" alt="Foto de Perfil">`;

    fotoSidebar.innerHTML =
        `<img src="${usuarioLogado.foto}" alt="Foto de Perfil">`;

}


// =====================================
// ABRIR INPUT DO BANNER
// =====================================

bannerUsu.addEventListener(
    "click",
    function () {

        inputBanner.click();

    }
);


// =====================================
// ABRIR INPUT DA FOTO
// =====================================

fotoPerfil.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();

        inputFotoPerfil.click();

    }
);


// =====================================
// ALTERAR BANNER
// =====================================

inputBanner.addEventListener(
    "change",
    function () {

        const arquivo =
            inputBanner.files[0];

        if (!arquivo) return;

        const leitor =
            new FileReader();

        leitor.onload =
            function (e) {

                const imagem =
                    e.target.result;

                bannerUsu.style.backgroundImage =
                    `url(${imagem})`;

                bannerUsu.style.backgroundSize =
                    "cover";

                bannerUsu.style.backgroundPosition =
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
    function (event) {

        event.stopPropagation();

        usuarioLogado.banner = "";

        bannerUsu.style.backgroundImage =
            "";

        salvarUsuario();

    }
);


// =====================================
// ALTERAR FOTO
// =====================================

inputFotoPerfil.addEventListener(
    "change",
    function () {

        const arquivo =
            inputFotoPerfil.files[0];

        if (!arquivo) return;

        const leitor =
            new FileReader();

        leitor.onload =
            function (e) {

                const imagem =
                    e.target.result;

                fotoPerfil.innerHTML =
    `<img src="${imagem}" alt="Foto de Perfil">`;

fotoSidebar.innerHTML =
    `<img src="${imagem}" alt="Foto de Perfil">`;
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
    function (event) {

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
// BOTÃO SALVAR
// =====================================

botaoSalvar.addEventListener(
    "click",
    function () {

usuarioLogado.nome =
    inputNome.value.trim();

nomeSidebar.innerText =
    usuarioLogado.nome;

        usuarioLogado.apresentacao =
            inputApresentacao.value.trim();

        usuarioLogado.habilidades =
            inputHabilidades.value.trim();

        usuarioLogado.categoria =
            inputCategoria.value;

        usuarioLogado.disponibilidade =
            inputDisponibilidade.value;

        salvarUsuario();

        alert(
            "Perfil atualizado com sucesso!"
        );

        window.location.href =
            "perfilVolun.html";

    }
);


// =====================================
// ATUALIZA loggedUser E users
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