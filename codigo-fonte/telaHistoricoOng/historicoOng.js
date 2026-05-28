// LISTA DE PARTICIPAÇÕES DE EXEMPLO
const participacoesExemplo = [
    {
        id: 1,
        nomeVoluntario: "Maria Souza",
        nomeVaga: "Educador Ambiental",
        dataInicio: "10/03/2026",
        dataFim: "10/05/2026",
        horas: 24,
        status: "validado",
        observacao: "Participou de todas as oficinas."
    },
    {
        id: 2,
        nomeVoluntario: "João Silva",
        nomeVaga: "Professor de Reforço Escolar",
        dataInicio: "02/04/2026",
        dataFim: null,
        horas: 0,
        status: "pendente",
        observacao: ""
    },
    {
        id: 3,
        nomeVoluntario: "Carla Mendes",
        nomeVaga: "Assistente Social Voluntário",
        dataInicio: "15/02/2026",
        dataFim: "15/05/2026",
        horas: 32,
        status: "validado",
        observacao: ""
    },
    {
        id: 4,
        nomeVoluntario: "Pedro Almeida",
        nomeVaga: "Educador Ambiental",
        dataInicio: "20/04/2026",
        dataFim: null,
        horas: 0,
        status: "pendente",
        observacao: ""
    }
];


// PEGA PARTICIPAÇÕES DO LOCALSTORAGE OU USA AS DE EXEMPLO
function carregarParticipacoes() {
    const dados = localStorage.getItem("participacoes_ong");

    if (!dados) {
        localStorage.setItem(
            "participacoes_ong",
            JSON.stringify(participacoesExemplo)
        );
        return participacoesExemplo;
    }

    return JSON.parse(dados);
}


// SALVA A LISTA NO LOCALSTORAGE
function salvarParticipacoes(lista) {
    localStorage.setItem("participacoes_ong", JSON.stringify(lista));
}


let participacoes = carregarParticipacoes();
let idEmEdicao = null;


// ATUALIZA OS NÚMEROS DO TOPO
function atualizarResumo() {
    const total = participacoes.length;

    const totalHoras = participacoes
        .filter(p => p.status === "validado")
        .reduce((soma, p) => soma + (Number(p.horas) || 0), 0);

    const pendentes = participacoes
        .filter(p => p.status === "pendente").length;

    document.getElementById("totalParticipacoes").textContent = total;
    document.getElementById("totalHoras").textContent = totalHoras + "h";
    document.getElementById("totalPendentes").textContent = pendentes;
}


// MONTA OS CARDS NA TELA
function mostrarParticipantes() {
    const lista = document.getElementById("listaParticipantes");
    const termo = document.getElementById("buscaParticipante").value.toLowerCase();
    const statusFiltro = document.getElementById("filtroStatus").value;


    const filtradas = participacoes.filter(p => {
        const ok1 =
            p.nomeVoluntario.toLowerCase().includes(termo) ||
            p.nomeVaga.toLowerCase().includes(termo);

        const ok2 = statusFiltro === "" || p.status === statusFiltro;

        return ok1 && ok2;
    });


    lista.innerHTML = "";

    if (filtradas.length === 0) {
        lista.innerHTML = `
            <div class="lista-vazia">
                Nenhum participante encontrado.
            </div>
        `;
        return;
    }


    filtradas.forEach(p => {

        const periodo = p.dataFim
            ? p.dataInicio + " a " + p.dataFim
            : "Desde " + p.dataInicio;

        const labelStatus = p.status === "validado"
            ? "Validado"
            : "Pendente";

        const textoBotao = p.status === "validado"
            ? "Editar horas"
            : "Validar horas";

        const classeBotao = p.status === "validado"
            ? "btn-editar"
            : "btn-validar";


        lista.innerHTML += `
            <div class="card-participante">

                <div class="avatar-voluntario">
                    <i class="fa-solid fa-user"></i>
                </div>

                <div class="info-voluntario">
                    <h3>${p.nomeVoluntario}</h3>
                    <p class="vaga">${p.nomeVaga}</p>

                    <div class="detalhes">
                        <span><strong>Período:</strong> ${periodo}</span>
                        <span><strong>Horas:</strong> ${p.horas}h</span>
                    </div>
                </div>

                <div class="status-validacao ${p.status}">
                    ${labelStatus}
                </div>

                <div class="acoes">
                    <button
                        class="${classeBotao}"
                        onclick="abrirModal(${p.id})"
                    >
                        ${textoBotao}
                    </button>
                </div>

            </div>
        `;
    });
}


// ABRE O MODAL PARA VALIDAR / EDITAR HORAS
function abrirModal(id) {
    const p = participacoes.find(x => x.id === id);
    if (!p) return;

    idEmEdicao = id;

    document.getElementById("modalNomeVoluntario").textContent = p.nomeVoluntario;
    document.getElementById("modalNomeVaga").textContent = p.nomeVaga;
    document.getElementById("inputHoras").value = p.horas || "";
    document.getElementById("inputObs").value = p.observacao || "";

    document.getElementById("modalValidar").classList.add("aberto");
}


function fecharModal() {
    document.getElementById("modalValidar").classList.remove("aberto");
    idEmEdicao = null;
}


// SALVA AS HORAS VALIDADAS
function confirmarValidacao() {
    if (idEmEdicao === null) return;

    const horas = parseFloat(document.getElementById("inputHoras").value);
    const obs = document.getElementById("inputObs").value;

    if (isNaN(horas) || horas < 0) {
        alert("Informe um número de horas válido.");
        return;
    }


    const indice = participacoes.findIndex(p => p.id === idEmEdicao);
    if (indice === -1) return;

    participacoes[indice].horas = horas;
    participacoes[indice].observacao = obs;
    participacoes[indice].status = "validado";

    salvarParticipacoes(participacoes);

    fecharModal();
    atualizarResumo();
    mostrarParticipantes();
}


// EVENTOS DOS FILTROS
document.getElementById("buscaParticipante")
    .addEventListener("input", mostrarParticipantes);

document.getElementById("filtroStatus")
    .addEventListener("change", mostrarParticipantes);


// CARREGA AO ABRIR
atualizarResumo();
mostrarParticipantes();
