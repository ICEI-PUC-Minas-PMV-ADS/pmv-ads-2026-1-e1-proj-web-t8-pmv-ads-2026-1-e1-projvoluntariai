// ── HISTÓRICO DE TRABALHO ──
function carregarHistorico(termoBusca) {
  var historico = carregarDadosLocais('historico_vagas') || dadosHistoricoExemplo();
  var termo = (termoBusca || '').trim().toLowerCase();

  if (termo) {
    historico = historico.filter(function(item) {
      return (
        item.nomeOng.toLowerCase().includes(termo) ||
        item.nomeVaga.toLowerCase().includes(termo) ||
        item.localizacao.toLowerCase().includes(termo)
      );
    });
  }

  renderizarHistorico(historico);
}

function dadosHistoricoExemplo() {
  return [
    { id: 1, nomeOng: 'Instituto Crescer', nomeVaga: 'Professor de Reforço Escolar', descricao: 'Apoio a crianças em matemática e português.', localizacao: 'Belo Horizonte - MG', horasTrabalhadas: '08:00' },
    { id: 2, nomeOng: 'ONG Verde Vivo',    nomeVaga: 'Educador Ambiental',            descricao: 'Oficinas de conscientização ambiental.',      localizacao: 'Sabará - MG',          horasTrabalhadas: '06:00' },
    { id: 3, nomeOng: 'Casa do Bem',        nomeVaga: 'Assistente Social Voluntário',  descricao: 'Atendimento a famílias vulneráveis.',           localizacao: 'Belo Horizonte - MG',  horasTrabalhadas: '10:00' },
    { id: 4, nomeOng: 'Cultura Viva',       nomeVaga: 'Instrutor de Teatro',           descricao: 'Oficinas de teatro para jovens.',               localizacao: 'Nova Lima - MG',        horasTrabalhadas: '05:00' }
  ];
}

function renderizarHistorico(lista) {
  var container = document.getElementById('historicoLista');
  if (!container) return;

  if (lista.length === 0) {
    container.innerHTML = '<div class="historico-vazio">Nenhum resultado encontrado.</div>';
    return;
  }

  var html = '';
  lista.forEach(function(item) {
    html +=
      '<div class="historico-card">' +
        '<div class="historico-card-imagem">Imagem<br>da ONG</div>' +
        '<div class="historico-card-info">' +
          '<p><strong>Nome da ONG:</strong> '        + item.nomeOng          + '</p>' +
          '<p><strong>Nome da vaga:</strong> '       + item.nomeVaga         + '</p>' +
          '<p><strong>Descrição:</strong> '          + item.descricao        + '</p>' +
          '<p><strong>Localização:</strong> '        + item.localizacao      + '</p>' +
          '<p><strong>Horas trabalhadas:</strong> '  + item.horasTrabalhadas + '</p>' +
        '</div>' +
        '<div class="historico-card-acoes">' +
          '<button class="btn-chat" onclick="alert(\'Abrindo chat com ' + item.nomeOng + '...\')">Chat com a ONG</button>' +
        '</div>' +
      '</div>';
  });

  container.innerHTML = html;
}

function buscarHistorico() {
  var termo = document.getElementById('buscaHistorico').value;
  carregarHistorico(termo);
}
