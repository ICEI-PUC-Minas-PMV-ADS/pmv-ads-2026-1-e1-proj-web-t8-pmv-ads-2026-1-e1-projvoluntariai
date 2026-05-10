const formLogin = document.querySelector('.form-login');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const botaoVoltar = document.querySelector('.voltar');
// const botaoRegistrar = document.getElementById('registrar'); // Removido pois não existe botão de registro na tela de login
const infoPerfil = document.getElementById('info-perfil');

const params = new URLSearchParams(window.location.search);
const perfil = params.get('perfil');

if (perfil) {
  infoPerfil.textContent = `Continuando como ${perfil}. Faça login para continuar.`;
}

formLogin.addEventListener('submit', function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const senha = senhaInput.value.trim();

  if (!email || !senha) {
    alert('Por favor, preencha email e senha.');
    return;
  }

  if (!email.includes('@') || senha.length < 6) {
    alert('Email ou senha inválidos. Use um email válido e senha com pelo menos 6 caracteres.');
    return;
  }

  // Obter usuários do localStorage e verificar credenciais
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.email === email);

  if (!user) {
    alert('Usuário não encontrado. Verifique o email ou cadastre-se.');
    return;
  }

  if (user.password !== senha) {
    alert('Senha incorreta.');
    return;
  }

  // Verificar se o perfil do usuário corresponde ao perfil (ONG ou Voluntário)
  if (perfil && user.perfil !== perfil) {
    alert(`Este email está registrado para o perfil ${user.perfil}. Selecione o perfil correto na tela inicial.`);
    return;
  }

  alert(`Login realizado com sucesso!\nPerfil: ${user.perfil}`);
  //armazenar usuário logado para uso posterior
  localStorage.setItem('loggedUser', JSON.stringify(user));
  // Redireciona conforme o perfil
  if (user.perfil === 'ONG') {
    window.location.href = '../tela-fluxocadastro/pagina-cadastroinicial.html';
  } else {
    window.location.href = '../tela-fluxocadastro/pagina-cadastroinicial.html';
  }
});

// Bloco de registro removido pois não existe botão de registro na tela de login

botaoVoltar.addEventListener('click', function () {
  window.location.href = '#';
});

//Denilson