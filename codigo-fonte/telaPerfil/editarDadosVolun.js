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

const inputEstado =
    document.getElementById("estado");

const inputIdade =
    document.getElementById("idade");

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
// CARREGAR DADOS ATUAIS
// =====================================

inputEmail.value =
    usuarioLogado.email || "";

inputEstado.value =
    usuarioLogado.estado || "";

inputIdade.value =
    usuarioLogado.idade || "";

     nomeSidebar.innerText =
    usuarioLogado.nome || "Voluntário";




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

        const estado =
            inputEstado.value;

        const idade =
            Number(
                inputIdade.value
            );

        const senha =
            inputSenha.value.trim();

        const confirmarSenha =
            inputConfirmarSenha.value.trim();


        // =====================================
        // VALIDAR EMAIL
        // =====================================

        if (!emailValido(email)) {

            alert(
                "Digite um email válido."
            );

            return;

        }

        


        // =====================================
        // VALIDAR IDADE
        // =====================================

        if (
            isNaN(idade) ||
            idade < 16
        ) {

            alert(
                "É necessário ter pelo menos 16 anos."
            );

            return;

        }


        // =====================================
        // VALIDAR SENHA
        // (somente se o usuário quiser alterar)
        // =====================================

        if (
            senha !== "" ||
            confirmarSenha !== ""
        ) {

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




        // =====================================
        // SALVAR DADOS
        // =====================================

        usuarioLogado.email =
            email;

        usuarioLogado.estado =
            estado;

        usuarioLogado.idade =
            idade;


        // Só altera a senha se o usuário digitou uma nova

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
            "../telaPerfil/perfilVolun.html";

    }
);


// =====================================
// BOTÃO VOLTAR
// =====================================

btnVoltar.addEventListener(
    "click",
    function () {

        window.location.href =
            "../telaPerfil/perfilVolun.html";

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
            localStorage.getItem("users")
        ) || [];

    const indice =
        users.findIndex(
            user =>
                user.email ===
                emailAntigo
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