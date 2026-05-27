// ── ARMAZENAMENTO LOCAL ──
function salvarDadosLocais(chave, valor) {
  localStorage.setItem(chave, JSON.stringify(valor));
}

function carregarDadosLocais(chave) {
  var dado = localStorage.getItem(chave);
  return dado ? JSON.parse(dado) : null;
}

// ── NAVEGAÇÃO ──
function mostrarPagina(nome) {
  document.querySelectorAll('.pagina').forEach(function(p) {
    p.classList.remove('ativa');
  });

  var alvo = document.getElementById('pagina-' + nome);
  if (alvo) alvo.classList.add('ativa');

  document.querySelectorAll('.nav-links a').forEach(function(a) {
    a.classList.remove('ativo');
  });

  var link = document.querySelector('.nav-links a[onclick*="' + nome + '"]');
  if (link) link.classList.add('ativo');

  document.getElementById('navLinks').classList.remove('aberto');

  if (nome === 'historico') {
    carregarHistorico();
    var dadosOng = carregarDadosLocais('ong_cadastro');
    var nomeEl = document.getElementById('historicoSidebarNome');
    if (nomeEl && dadosOng) nomeEl.textContent = dadosOng.nome || 'Usuário';
  }
}

function alternarMenu() {
  document.getElementById('navLinks').classList.toggle('aberto');
}

function sair() {
  if (confirm('Deseja realmente sair?')) {
    localStorage.removeItem('ong_cadastro');
    carregarPerfil();
    mostrarPagina('sobre');
  }
}

// ── INICIALIZAÇÃO ──
mostrarPagina('perfil');
carregarPerfil();
