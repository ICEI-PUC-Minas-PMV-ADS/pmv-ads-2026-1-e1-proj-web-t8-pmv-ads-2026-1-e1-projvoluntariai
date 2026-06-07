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
// ELEMENTOS
// =====================================

const inputEmail =
    document.getElementById("email");

const inputSenha =
    document.getElementById("senha");

const inputConfirmarSenha =
    document.getElementById("confirmarSenha");

const btnSalvar =
    document.getElementById("btnSalvar");

const btnVoltar =
    document.getElementById("btnvoltar");

    const nomeSidebar =
    document.getElementById("nomeSidebar");
 
    const fotoSidebar =
    document.getElementById(
        "fotoSidebar"
    );


// =====================================
// CARREGAR DADOS
// =====================================

inputEmail.value =
    usuarioLogado.email || "";

    nomeSidebar.innerText =
    usuarioLogado.nome || "ONG";



// =====================================
// VALIDAR EMAIL
// =====================================

function emailValido(email) {

    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);

}

// =====================================
// FOTO SIDEBAR
// =====================================

if (usuarioLogado.foto) {

    fotoSidebar.innerHTML =
        `<img src="${usuarioLogado.foto}" alt="Foto de Perfil">`;

}


// =====================================
// BOTÃO SALVAR
// =====================================

btnSalvar.addEventListener(
    "click",
    function () {

        const emailAntigo =
            usuarioLogado.email;

        const email =
            inputEmail.value.trim();

        const senha =
            inputSenha.value;

        const confirmarSenha =
            inputConfirmarSenha.value;


        // EMAIL

        if (!emailValido(email)) {

            alert(
                "Digite um email válido."
            );

            return;

        }


        // SENHA OPCIONAL

        if (senha !== "") {

            if (senha.length < 8) {

                alert(
                    "A senha deve possuir no mínimo 8 caracteres."
                );

                return;

            }

            if (
                senha !==
                confirmarSenha
            ) {

                alert(
                    "As senhas não coincidem."
                );

                return;

            }

        }


        // ATUALIZA DADOS

        usuarioLogado.email =
            email;

        if (senha !== "") {

            usuarioLogado.password =
                senha;

        }


        salvarUsuario(
            emailAntigo
        );

        alert(
            "Dados atualizados com sucesso!"
        );

        window.location.href =
            "../telaPerfil/PerfilONG.html";

    }
);


// =====================================
// BOTÃO VOLTAR
// =====================================

btnVoltar.addEventListener(
    "click",
    function () {

        window.location.href =
            "../telaPerfil/PerfilONG.html";

    }
);


// =====================================
// SALVAR NO LOCAL STORAGE
// =====================================

function salvarUsuario(
    emailAntigo
) {

    localStorage.setItem(
        "loggedUser",
        JSON.stringify(
            usuarioLogado
        )
    );

    const users =
        JSON.parse(
            localStorage.getItem(
                "users"
            )
        ) || [];

    const indice =
        users.findIndex(
            user =>
                user.email ===
                emailAntigo
        );
        console.log(
    "Email antigo:",
    emailAntigo
);

console.log(
    "Índice encontrado:",
    indice
);

console.log(
    "Lista users:",
    users
);

    if (indice !== -1) {

        users[indice] =
            usuarioLogado;

        localStorage.setItem(
            "users",
            JSON.stringify(
                users
            )
        );

    }

}