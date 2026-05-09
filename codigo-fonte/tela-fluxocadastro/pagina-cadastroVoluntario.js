const form = document.getElementById('formCadastro');
const cancelar = document.getElementById('cancelar');
const trigger = document.getElementById('perfilTrigger');
const opcoes = document.getElementById('perfilOpcoes');
const perfilTexto = document.getElementById('perfilTexto');
const perfilInput = document.getElementById('perfil');
const senhaEl = document.getElementById('senha');
const confirmarEl = document.getElementById('confirmarSenha');
const hintSenha = document.getElementById('hintSenha');

trigger.addEventListener('click', () => {
  trigger.classList.toggle('aberto');
  opcoes.classList.toggle('aberto');
});

opcoes.querySelectorAll('li').forEach(li => {
  li.addEventListener('click', () => {
    perfilTexto.textContent = li.textContent;
    perfilTexto.classList.add('selecionado');
    perfilInput.value = li.dataset.value;
    trigger.classList.remove('aberto', 'campo-erro');
    opcoes.classList.remove('aberto');
  });
});

document.addEventListener('click', e => {
  if (!document.getElementById('perfilWrapper').contains(e.target)) {
    trigger.classList.remove('aberto');
    opcoes.classList.remove('aberto');
  }
});

confirmarEl.addEventListener('input', () => {
  if (!confirmarEl.value) {
    hintSenha.textContent = '';
    hintSenha.className = 'hint';
    return;
  }
  if (confirmarEl.value === senhaEl.value) {
    hintSenha.textContent = 'Senhas coincidem';
    hintSenha.className = 'hint match-ok';
    confirmarEl.classList.remove('campo-erro');
  } else {
    hintSenha.textContent = 'Senhas diferentes';
    hintSenha.className = 'hint match-erro';
  }
});

let toastTimer;
function mostrarToast(msg, tipo) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = 'toast visivel ' + (tipo || '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visivel'), 3500);
}

function marcarErro(el) {
  el.classList.add('campo-erro');
  el.addEventListener('input', () => el.classList.remove('campo-erro'), { once: true });
}

function resetPerfil() {
  perfilTexto.textContent = 'Selecione';
  perfilTexto.classList.remove('selecionado');
  perfilInput.value = '';
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const nomeEl = document.getElementById('nome');
  const emailEl = document.getElementById('email');

  const nome = nomeEl.value.trim();
  const perfil = perfilInput.value;
  const email = emailEl.value.trim();
  const senha = senhaEl.value;
  const confirmar = confirmarEl.value;

  if (!nome) {
    marcarErro(nomeEl);
    mostrarToast('Digite seu nome completo.', 'erro');
    nomeEl.focus();
    return;
  }

  if (!perfil) {
    trigger.classList.add('campo-erro');
    mostrarToast('Escolha um perfil para continuar.', 'erro');
    return;
  }

  if (!email) {
    marcarErro(emailEl);
    mostrarToast('Informe seu e-mail.', 'erro');
    emailEl.focus();
    return;
  }

  if (senha.length < 8) {
    marcarErro(senhaEl);
    mostrarToast('A senha precisa ter ao menos 8 caracteres.', 'erro');
    senhaEl.focus();
    return;
  }

  if (senha !== confirmar) {
    marcarErro(confirmarEl);
    mostrarToast('As senhas não estão iguais.', 'erro');
    confirmarEl.focus();
    return;
  }

  mostrarToast('Cadastro realizado com sucesso!', 'sucesso');
  form.reset();
  resetPerfil();
  hintSenha.textContent = '';
  hintSenha.className = 'hint';
});

cancelar.addEventListener('click', () => {
  form.reset();
  resetPerfil();
  hintSenha.textContent = '';
  hintSenha.className = 'hint';
});
