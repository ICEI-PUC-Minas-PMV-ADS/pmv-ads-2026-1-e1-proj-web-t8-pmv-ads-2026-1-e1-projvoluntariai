// Alternar visibilidade das senhas
function configurarToggleSenha(btnId, inputId) {
    const btn = document.getElementById(btnId);
    const input = document.getElementById(inputId);
    if (!btn || !input) return;

    btn.addEventListener('click', () => {
        const visivel = input.type === 'text';
        input.type = visivel ? 'password' : 'text';
        btn.setAttribute('aria-label', visivel ? 'Mostrar senha' : 'Ocultar senha');
        btn.style.color = visivel ? '#9ca3af' : '#8b5cf6';
    });
}

configurarToggleSenha('toggleSenha', 'senha');
configurarToggleSenha('toggleConfirmar', 'confirmarSenha');

// Exibir ou limpar mensagem de erro em um campo
function definirErro(campoId, mensagem) {
    const input = document.getElementById(campoId);
    const erro = document.getElementById('erro-' + campoId);
    if (!input || !erro) return;

    if (mensagem) {
        erro.textContent = mensagem;
        input.classList.add('erro');
    } else {
        erro.textContent = '';
        input.classList.remove('erro');
    }
}

// Limpar erro ao digitar
['nomeOrganizacao', 'areasAtuacao', 'email', 'senha', 'confirmarSenha'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
        el.addEventListener('input', () => definirErro(id, ''));
        el.addEventListener('change', () => definirErro(id, ''));
    }
});

// Validação do formulário
function validarFormulario() {
    let valido = true;

    const nome = document.getElementById('nomeOrganizacao').value.trim();
    if (!nome) {
        definirErro('nomeOrganizacao', 'O nome da organização é obrigatório.');
        valido = false;
    }

   const selectArea =
    document.getElementById('areasAtuacao');

const area =
    selectArea.options[
        selectArea.selectedIndex
    ].text;

    const email = document.getElementById('email').value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        definirErro('email', 'O e-mail é obrigatório.');
        valido = false;
    } else if (!regexEmail.test(email)) {
        definirErro('email', 'Informe um e-mail válido.');
        valido = false;
    }

    const senha = document.getElementById('senha').value;
    if (!senha) {
        definirErro('senha', 'A senha é obrigatória.');
        valido = false;
    } else if (senha.length < 8) {
        definirErro('senha', 'A senha deve ter no mínimo 8 caracteres.');
        valido = false;
    }

    const confirmar = document.getElementById('confirmarSenha').value;
    if (!confirmar) {
        definirErro('confirmarSenha', 'Confirme sua senha.');
        valido = false;
    } else if (confirmar !== senha) {
        definirErro('confirmarSenha', 'As senhas não coincidem.');
        valido = false;
    }

    return valido;
}

// Submissão do formulário
document.getElementById('formCadastroOng').addEventListener('submit', function (e) {

    e.preventDefault();

    if (validarFormulario()) {

        const nome = document.getElementById('nomeOrganizacao').value.trim();
        const area = document.getElementById('areasAtuacao').value;
        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value;
        const perfil = 'ONG';

        const novoUsuario = {
    nome,
    area,
    email,
    password: senha,
    perfil: "ONG",
    foto: "",
    banner: "",
    apresentacao: "",
    nossostrabalhos: ""
};

        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.some(u => u.email === email)) {
            alert('Já existe um cadastro com este e-mail.');
            return;
        }

        users.push(novoUsuario);

        localStorage.setItem(
            'users',
            JSON.stringify(users)
        );

        // LOGIN AUTOMÁTICO
        localStorage.setItem(
            'loggedUser',
            JSON.stringify(novoUsuario)
        );

        alert('Cadastro realizado com sucesso!');

        window.location.href =
            '../telaPerfil/PerfilONG.html';
    }

});


// Cancelar limpa o formulário e os erros
document.getElementById('btnCancelar').addEventListener('click', function () {
    document.getElementById('formCadastroOng').reset();
    ['nomeOrganizacao', 'areasAtuacao', 'email', 'senha', 'confirmarSenha'].forEach(id => definirErro(id, ''));
});
const btnPerfil = document.getElementById("btnPerfil");

btnPerfil.addEventListener("click", function(event){

    event.preventDefault();

    const usuarioLogado =
    JSON.parse(localStorage.getItem("loggedUser"));

    // Não está logado
    if(!usuarioLogado){

        window.location.href =
        "../telaLogin/login.html";

        return;
    }

    // ONG
    if(usuarioLogado.perfil === "ONG"){

        window.location.href =
        "../telaPerfil/PerfilONG.html";

    }

    else {

        window.location.href =
        "../telaPerfil/perfilVolun.html";

    }

});