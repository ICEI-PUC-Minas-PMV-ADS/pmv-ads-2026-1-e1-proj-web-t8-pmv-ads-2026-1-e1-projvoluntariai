// PEGA O ÍNDICE DA VAGA NA URL (?idx=)
function pegarIndiceVaga() {
    const url = new URLSearchParams(window.location.search);
    const idx = url.get("idx");
    return idx !== null ? parseInt(idx, 10) : null;
}


// VAGA DE EXEMPLO (USADA QUANDO NÃO HÁ DADOS SALVOS)
const vagaExemplo = {
    titulo: "Educador Ambiental",
    nomeOng: "ONG Verde Vivo",
    modalidade: "Presencial",
    area: "Meio Ambiente",
    aceitaPsc: true,
    descricao: "Oportunidade para atuar em oficinas de conscientização ambiental com crianças e jovens da comunidade.",
    localizacao: "Belo Horizonte - MG",
    cargaHoraria: "8h semanais",
    dataInicio: "01/06/2026",
    dataFim: "30/08/2026",
    atividades: "Conduzir oficinas sobre reciclagem\nApoiar plantio de mudas em escolas parceiras\nAuxiliar na organização de eventos comunitários",
    requisitos: "Maior de 16 anos\nDisponibilidade aos sábados\nInteresse por meio ambiente",
    sobreOng: "A ONG Verde Vivo atua há 10 anos em projetos de educação ambiental e preservação da biodiversidade urbana."
};


// PEGA A VAGA QUE VEIO DA TELA DE VAGAS OU USA A DE EXEMPLO
function carregarVaga() {
    const idx = pegarIndiceVaga();
    const vagas = JSON.parse(localStorage.getItem("vagas")) || [];

    let vaga;

    if (idx !== null && vagas[idx]) {
        vaga = vagas[idx];
    } else if (vagas.length > 0) {
        vaga = vagas[0];
    } else {
        vaga = vagaExemplo;
    }

    preencherTela(vaga);
}


// Aceita string com quebras de linha OU array. Retorna array de itens.
function normalizarLista(valor) {
    if (!valor) return [];

    if (Array.isArray(valor)) {
        return valor.filter(v => v && v.toString().trim());
    }

    return valor
        .toString()
        .split(/\r?\n/)
        .map(s => s.trim())
        .filter(s => s);
}


// COLOCA OS DADOS NA TELA
function preencherTela(vaga) {

    // Cadastro salva "titulo" (sem acento). Fallback p/ "título" só por segurança.
    const titulo = vaga.titulo || vaga.título || "Vaga sem título";

    document.getElementById("tituloVaga").textContent = titulo;

    document.getElementById("nomeOng").textContent =
        vaga.nomeOng || "ONG não informada";

    document.getElementById("descricaoVaga").textContent =
        vaga.descricao || "Sem descrição cadastrada.";

    document.getElementById("localizacao").textContent =
        vaga.localizacao || "--";

    document.getElementById("cargaHoraria").textContent =
        vaga.cargaHoraria || "--";

    document.getElementById("modalidade").textContent =
        vaga.modalidade || "--";


    // PERÍODO
    let periodo = "--";
    if (vaga.dataInicio && vaga.dataFim) {
        periodo = vaga.dataInicio + " a " + vaga.dataFim;
    } else if (vaga.dataInicio) {
        periodo = "A partir de " + vaga.dataInicio;
    }
    document.getElementById("periodo").textContent = periodo;


    // TAGS - esconde as que não têm dado
    const tagModalidade = document.getElementById("tagModalidade");
    if (vaga.modalidade) {
        tagModalidade.textContent = vaga.modalidade;
        tagModalidade.style.display = "inline-block";
    } else {
        tagModalidade.style.display = "none";
    }

    const tagArea = document.getElementById("tagArea");
    if (vaga.area) {
        tagArea.textContent = vaga.area;
        tagArea.style.display = "inline-block";
    } else {
        tagArea.style.display = "none";
    }

    const tagPsc = document.getElementById("tagPsc");
    tagPsc.style.display = vaga.aceitaPsc ? "inline-block" : "none";


    // ATIVIDADES
    const ulAtividades = document.getElementById("atividades");
    const atividades = normalizarLista(vaga.atividades);
    ulAtividades.innerHTML = atividades.length === 0
        ? "<li>Nenhuma atividade descrita.</li>"
        : atividades.map(a => "<li>" + a + "</li>").join("");


    // REQUISITOS
    const ulRequisitos = document.getElementById("requisitos");
    const requisitos = normalizarLista(vaga.requisitos);
    ulRequisitos.innerHTML = requisitos.length === 0
        ? "<li>Sem requisitos específicos.</li>"
        : requisitos.map(r => "<li>" + r + "</li>").join("");


    // SOBRE A ONG
    document.getElementById("sobreOng").textContent =
        vaga.sobreOng || "A ONG ainda não cadastrou descrição.";


    // IMAGEM - cadastro de vagas ainda não salva imagem,
    // então usa placeholder se não tiver
    const img = document.getElementById("imgOng");
    if (vaga.imagem) {
        img.src = vaga.imagem;
    } else {
        img.src = "https://placehold.co/160x160/ecebff/a24cc4?text=ONG";
    }

    guardarVagaAtual(vaga, titulo);
}


// SALVA A VAGA QUE ESTÁ SENDO VISTA PARA USAR NA INSCRIÇÃO
let vagaAtual = null;
let tituloAtual = "";
function guardarVagaAtual(vaga, titulo) {
    vagaAtual = vaga;
    tituloAtual = titulo;
}


// INSCRIÇÃO DO VOLUNTÁRIO NA VAGA
function inscrever() {
    if (!vagaAtual) return;

    const inscricoes =
        JSON.parse(localStorage.getItem("inscricoes")) || [];


    // EVITA INSCRIÇÃO DUPLICADA
    const jaInscrito = inscricoes.some(i => i.nomeVaga === tituloAtual);

    if (jaInscrito) {
        alert("Você já está inscrito nesta vaga.");
        return;
    }


    inscricoes.push({
        nomeVaga: tituloAtual,
        nomeOng: vagaAtual.nomeOng || "",
        localizacao: vagaAtual.localizacao || "",
        cargaHoraria: vagaAtual.cargaHoraria || "",
        dataInscricao: new Date().toLocaleDateString("pt-BR"),
        status: "Aguardando confirmação"
    });

    localStorage.setItem("inscricoes", JSON.stringify(inscricoes));

    abrirModal();

    const botao = document.getElementById("btnInscrever");
    botao.textContent = "Inscrição enviada";
    botao.disabled = true;
}


function abrirModal() {
    document.getElementById("modalConfirma").classList.add("aberto");
}

function fecharModal() {
    document.getElementById("modalConfirma").classList.remove("aberto");
}


// EVENTOS
document.getElementById("btnInscrever").addEventListener("click", inscrever);


// CARREGA AO ABRIR A PÁGINA
carregarVaga();
