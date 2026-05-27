// ── DROPDOWN DE ÁREA ──
var areaSelecionada = '';

function alternarDropdown() {
  document.getElementById('menuDropdown').classList.toggle('aberto');
}

function selecionarArea(valor) {
  areaSelecionada = valor;
  document.getElementById('botaoDropdown').textContent = valor;
  document.getElementById('menuDropdown').classList.remove('aberto');
  document.querySelectorAll('.menu-dropdown div').forEach(function(d) {
    d.classList.remove('selecionado');
  });
  event.target.classList.add('selecionado');
}

document.addEventListener('click', function(e) {
  var container = document.querySelector('.container-dropdown');
  if (container && !container.contains(e.target)) {
    document.getElementById('menuDropdown').classList.remove('aberto');
  }
});

// ── API EXTERNA: ViaCEP ──
function mascaraCep(input) {
  var v = input.value.replace(/\D/g, '');
  if (v.length > 5) v = v.slice(0, 5) + '-' + v.slice(5, 8);
  input.value = v;
}

function buscarCep() {
  var cepBruto = document.getElementById('cep').value.replace(/\D/g, '');
  var erroCep = document.getElementById('erroCep');

  if (cepBruto.length !== 8) {
    erroCep.classList.add('visivel');
    return;
  }

  erroCep.classList.remove('visivel');
  document.getElementById('cidade').value = 'Buscando...';

  fetch('https://viacep.com.br/ws/' + cepBruto + '/json/')
    .then(function(resposta) { return resposta.json(); })
    .then(function(dados) {
      if (dados.erro) {
        erroCep.classList.add('visivel');
        document.getElementById('cidade').value = '';
        return;
      }
      document.getElementById('cidade').value = dados.localidade || '';
      document.getElementById('estado').value  = dados.uf        || '';
      document.getElementById('bairro').value  = dados.bairro    || '';
    })
    .catch(function() {
      erroCep.classList.add('visivel');
      document.getElementById('cidade').value = '';
    });
}

// ── VALIDAÇÕES EM TEMPO REAL ──
function validarCampo(input, minLen) {
  var erroId = 'erro' + input.id.charAt(0).toUpperCase() + input.id.slice(1);
  var erro = document.getElementById(erroId);
  if (input.value.trim().length >= minLen) {
    input.classList.add('valido');
    input.classList.remove('invalido');
    if (erro) erro.classList.remove('visivel');
  } else {
    input.classList.add('invalido');
    input.classList.remove('valido');
    if (erro) erro.classList.add('visivel');
  }
}

function validarEmail(input) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var erro = document.getElementById('erroEmail');
  if (regex.test(input.value)) {
    input.classList.add('valido');
    input.classList.remove('invalido');
    erro.classList.remove('visivel');
  } else {
    input.classList.add('invalido');
    input.classList.remove('valido');
    erro.classList.add('visivel');
  }
}

function validarSenha(input) {
  var erro = document.getElementById('erroSenha');
  if (input.value.length >= 8) {
    input.classList.add('valido');
    input.classList.remove('invalido');
    erro.classList.remove('visivel');
  } else {
    input.classList.add('invalido');
    input.classList.remove('valido');
    erro.classList.add('visivel');
  }
}

function validarConfirmacao(input) {
  var erro = document.getElementById('erroConfirmacao');
  if (input.value === document.getElementById('senha').value && input.value.length > 0) {
    input.classList.add('valido');
    input.classList.remove('invalido');
    erro.classList.remove('visivel');
  } else {
    input.classList.add('invalido');
    input.classList.remove('valido');
    erro.classList.add('visivel');
  }
}

// ── SALVAR DADOS ──
function salvarDados() {
  var nome      = document.getElementById('nomeOrg').value.trim();
  var email     = document.getElementById('email').value.trim();
  var senha     = document.getElementById('senha').value;
  var confirmar = document.getElementById('confirmarSenha').value;
  var cidade    = document.getElementById('cidade').value.trim();
  var estado    = document.getElementById('estado').value.trim();
  var bairro    = document.getElementById('bairro').value.trim();
  var descricao = document.getElementById('descricaoOrg').value.trim();

  if (!nome || !email || !senha || !confirmar || !areaSelecionada) {
    alert('Por favor, preencha todos os campos obrigatórios (incluindo a área de atuação).');
    return;
  }
  if (nome.length < 3) { alert('Nome muito curto.'); return; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { alert('E-mail inválido.'); return; }
  if (senha.length < 8) { alert('A senha deve ter no mínimo 8 caracteres.'); return; }
  if (senha !== confirmar) { alert('As senhas não coincidem.'); return; }

  var dadosOng = {
    nome: nome,
    area: areaSelecionada,
    email: email,
    cidade: cidade,
    estado: estado,
    bairro: bairro,
    descricao: descricao
  };

  salvarDadosLocais('ong_cadastro', dadosOng);

  var aviso = document.getElementById('avisoSalvo');
  aviso.classList.add('visivel');
  setTimeout(function() { aviso.classList.remove('visivel'); }, 4000);

  carregarPerfil();
}
