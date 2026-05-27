// ── PERFIL ──
function carregarPerfil() {
  var dadosOng = carregarDadosLocais('ong_cadastro');
  if (dadosOng) {
    document.getElementById('perfilNome').textContent = dadosOng.nome || '—';
    document.getElementById('perfilArea').textContent = dadosOng.area || '—';
    document.getElementById('perfilCidade').textContent =
      dadosOng.cidade ? dadosOng.cidade + ' - ' + dadosOng.estado : '—';
    document.getElementById('perfilSobre').textContent =
      dadosOng.descricao || 'Nenhuma descrição cadastrada.';
    document.getElementById('sidebarNome').textContent = dadosOng.nome || 'Nome ONG';
  }
}

function atualizarAreaPerfil() {
  var area = document.getElementById('perfilSelectArea').value;
  document.getElementById('perfilArea').textContent = area;

  var dados = carregarDadosLocais('ong_cadastro') || {};
  dados.area = area;
  salvarDadosLocais('ong_cadastro', dados);
}
