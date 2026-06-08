// ONG logada
const ongLogada =
    JSON.parse(localStorage.getItem("loggedUser")) || {};

// nome da ONG no topo da sidebar
const nomeTopo = document.getElementById("nomeOngTopo");
if (nomeTopo && ongLogada.nome) {
    nomeTopo.textContent = ongLogada.nome;
}

// lista completa de inscrições do site
let inscricoes =
    JSON.parse(localStorage.getItem("inscricoes")) || [];

let idxEmEdicao = null;


// guarda a lista no localStorage
function salvarInscricoes() {
    localStorage.setItem("inscricoes", JSON.stringify(inscricoes));
}


// retorna as inscrições das vagas dessa ONG, junto com o índice na lista completa
function inscricoesDaOng() {
    return inscricoes
        .map((item, idx) => ({ item, idx }))
        .filter(p => p.item.nomeOng === ongLogada.nome);
}


// ATUALIZA OS NÚMEROS DO TOPO
function atualizarResumo() {
    const lista = inscricoesDaOng();

    const total = lista.length;

    const totalHoras = lista
        .filter(p => p.item.status === "validado")
        .reduce((soma, p) => soma + (Number(p.item.horas) || 0), 0);

    const pendentes = lista
        .filter(p => p.item.status === "pendente").length;

    document.getElementById("totalParticipacoes").textContent = total;
    document.getElementById("totalHoras").textContent = totalHoras + "h";
    document.getElementById("totalPendentes").textContent = pendentes;
}


// MONTA OS CARDS NA TELA
function mostrarParticipantes() {
    const lista = document.getElementById("listaParticipantes");
    const termo = document.getElementById("buscaParticipante").value.toLowerCase();
    const statusFiltro = document.getElementById("filtroStatus").value;


    const filtradas = inscricoesDaOng().filter(p => {
        const ok1 =
            (p.item.nomeVoluntario || "").toLowerCase().includes(termo) ||
            (p.item.nomeVaga || "").toLowerCase().includes(termo);

        const ok2 = statusFiltro === "" || p.item.status === statusFiltro;

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
        const item = p.item;

        const labelStatus = item.status === "validado"
            ? "Validado"
            : "Pendente";

        const textoBotao = item.status === "validado"
            ? "Editar horas"
            : "Validar horas";

        const classeBotao = item.status === "validado"
            ? "btn-editar"
            : "btn-validar";


        lista.innerHTML += `
            <div class="card-participante">

                <div class="avatar-voluntario">
                    <i class="fa-solid fa-user"></i>
                </div>

                <div class="info-voluntario">
                    <h3>${item.nomeVoluntario || "Voluntário"}</h3>
                    <p class="vaga">${item.nomeVaga || ""}</p>

                    <div class="detalhes">
                        <span><strong>Inscrito em:</strong> ${item.dataInscricao || "—"}</span>
                        <span><strong>Horas:</strong> ${item.horas || 0}h</span>
                    </div>
                </div>

                <div class="status-validacao ${item.status}">
                    ${labelStatus}
                </div>

                <div class="acoes">
                    <button
                        class="${classeBotao}"
                        onclick="abrirModal(${p.idx})"
                    >
                        ${textoBotao}
                    </button>
                </div>

            </div>
        `;
    });
}


// ABRE O MODAL PARA VALIDAR / EDITAR HORAS
function abrirModal(idx) {
    const item = inscricoes[idx];
    if (!item) return;

    idxEmEdicao = idx;

    document.getElementById("modalNomeVoluntario").textContent = item.nomeVoluntario || "Voluntário";
    document.getElementById("modalNomeVaga").textContent = item.nomeVaga || "";
    document.getElementById("inputHoras").value = item.horas || "";
    document.getElementById("inputObs").value = item.observacao || "";

    document.getElementById("modalValidar").classList.add("aberto");
}


function fecharModal() {
    document.getElementById("modalValidar").classList.remove("aberto");
    idxEmEdicao = null;
}


// SALVA AS HORAS VALIDADAS
function confirmarValidacao() {
    if (idxEmEdicao === null) return;

    const horas = parseFloat(document.getElementById("inputHoras").value);
    const obs = document.getElementById("inputObs").value;

    if (isNaN(horas) || horas < 0) {
        alert("Informe um número de horas válido.");
        return;
    }

    inscricoes[idxEmEdicao].horas = horas;
    inscricoes[idxEmEdicao].observacao = obs;
    inscricoes[idxEmEdicao].status = "validado";

    salvarInscricoes();

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
