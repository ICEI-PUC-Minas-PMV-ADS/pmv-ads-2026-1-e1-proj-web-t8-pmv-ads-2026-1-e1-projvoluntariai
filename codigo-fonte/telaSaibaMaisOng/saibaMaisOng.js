// PEGA O ID DA VAGA NA URL
function pegarIdVaga() {
    const url = new URLSearchParams(window.location.search);
    return url.get("id");
}


// VAGA DE EXEMPLO (USADA QUANDO NÃO HÁ DADOS SALVOS)
const vagaExemplo = {
    título: "Educador Ambiental",
    nomeOng: "ONG Verde Vivo",
    imagem: "",
    modalidade: "Presencial",
    area: "Meio Ambiente",
    aceitaPsc: true,
    descricao: "Oportunidade para atuar em oficinas de conscientização ambiental com crianças e jovens da comunidade.",
    localizacao: "Belo Horizonte - MG",
    cargaHoraria: "8h semanais",
    dataInicio: "01/06/2026",
    dataFim: "30/08/2026",
    atividades: [
        "Conduzir oficinas sobre reciclagem",
        "Apoiar plantio de mudas em escolas parceiras",
        "Auxiliar na organização de eventos comunitários"
    ],
    requisitos: [
        "Maior de 16 anos",
        "Disponibilidade aos sábados",
        "Interesse por meio ambiente"
    ],
    sobreOng: "A ONG Verde Vivo atua há 10 anos em projetos de educação ambiental e preservação da biodiversidade urbana."
};


// PEGA A VAGA QUE VEIO DA TELA DE VAGAS OU USA A DE EXEMPLO
function carregarVaga() {
    const id = pegarIdVaga();
    const vagas = JSON.parse(localStorage.getItem("vagas")) || [];

    let vaga;

    if (id) {
        vaga = vagas.find(v => String(v.id) === id);
    }

    if (!vaga && vagas.length > 0) {
        vaga = vagas[0];
    }

    if (!vaga) {
        vaga = vagaExemplo;
    }

    preencherTela(vaga);
}


// COLOCA OS DADOS NA TELA
function preencherTela(vaga) {

    document.getElementById("tituloVaga").textContent =
        vaga.título || vaga.titulo || "Vaga sem título";

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


    // TAGS
    document.getElementById("tagModalidade").textContent =
        vaga.modalidade || "Modalidade";

    document.getElementById("tagArea").textContent =
        vaga.area || "Área";

    const tagPsc = document.getElementById("tagPsc");
    if (vaga.aceitaPsc) {
        tagPsc.style.display = "inline-block";
    } else {
        tagPsc.style.display = "none";
    }


    // ATIVIDADES
    const ulAtividades = document.getElementById("atividades");
    ulAtividades.innerHTML = "";
    const atividades = vaga.atividades || [];
    if (atividades.length === 0) {
        ulAtividades.innerHTML = "<li>Nenhuma atividade descrita.</li>";
    } else {
        atividades.forEach(a => {
            ulAtividades.innerHTML += "<li>" + a + "</li>";
        });
    }


    // REQUISITOS
    const ulRequisitos = document.getElementById("requisitos");
    ulRequisitos.innerHTML = "";
    const requisitos = vaga.requisitos || [];
    if (requisitos.length === 0) {
        ulRequisitos.innerHTML = "<li>Sem requisitos específicos.</li>";
    } else {
        requisitos.forEach(r => {
            ulRequisitos.innerHTML += "<li>" + r + "</li>";
        });
    }


    // SOBRE A ONG
    document.getElementById("sobreOng").textContent =
        vaga.sobreOng || "A ONG ainda não cadastrou descrição.";


    // IMAGEM
    const img = document.getElementById("imgOng");
    if (vaga.imagem) {
        img.src = vaga.imagem;
    } else {
        img.src = "https://placehold.co/160x160/ecebff/a24cc4?text=ONG";
    }

    guardarVagaAtual(vaga);
}


// SALVA A VAGA QUE ESTÁ SENDO VISTA PARA USAR NA INSCRIÇÃO
let vagaAtual = null;
function guardarVagaAtual(vaga) {
    vagaAtual = vaga;
}


// INSCRIÇÃO DO VOLUNTÁRIO NA VAGA
function inscrever() {
    if (!vagaAtual) return;

    const inscricoes =
        JSON.parse(localStorage.getItem("inscricoes")) || [];


    // EVITA INSCRIÇÃO DUPLICADA
    const jaInscrito = inscricoes.some(i =>
        i.idVaga === vagaAtual.id &&
        i.nomeVaga === (vagaAtual.título || vagaAtual.titulo)
    );

    if (jaInscrito) {
        alert("Você já está inscrito nesta vaga.");
        return;
    }


    inscricoes.push({
        idVaga: vagaAtual.id || null,
        nomeVaga: vagaAtual.título || vagaAtual.titulo,
        nomeOng: vagaAtual.nomeOng,
        localizacao: vagaAtual.localizacao,
        cargaHoraria: vagaAtual.cargaHoraria,
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
