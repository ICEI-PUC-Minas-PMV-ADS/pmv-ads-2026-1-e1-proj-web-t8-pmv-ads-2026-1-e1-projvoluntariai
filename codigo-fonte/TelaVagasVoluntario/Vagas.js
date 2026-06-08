const lista = document.getElementById("listaVagas");

const filtroModalidade =
document.getElementById("filtroModalidade");

const filtroEstado =
document.getElementById("filtroEstado");


// PEGA VAGAS SALVAS
let vagas =
JSON.parse(localStorage.getItem("vagas")) || [];


// FUNÇÃO QUE MOSTRA AS VAGAS
function mostrarVagas() {

    // LIMPA A TELA
    lista.innerHTML = "";

    // PEGA FILTROS
    const modalidadeSelecionada =
    filtroModalidade.value;

    const estadoSelecionado =
    filtroEstado.value;

    // texto do estado selecionado (ex: "Minas Gerais")
    const estadoTexto =
    filtroEstado.options[filtroEstado.selectedIndex].text;


    // FILTRA VAGAS
    const vagasFiltradas = vagas.filter(vaga => {

        // compara sem diferenciar maiúscula de minúscula
        const filtroModalidadeOk =
        modalidadeSelecionada === "" ||
        (vaga.modalidade || "").toLowerCase() === modalidadeSelecionada.toLowerCase();

        // a localização é texto livre, então procura o código (MG) ou o nome do estado
        const local = (vaga.localizacao || "").toLowerCase();
        const filtroEstadoOk =
        estadoSelecionado === "" ||
        local.includes(estadoSelecionado.toLowerCase()) ||
        local.includes(estadoTexto.toLowerCase());

        return filtroModalidadeOk &&
               filtroEstadoOk;
    });


    // SE NÃO TIVER VAGAS
    if (vagasFiltradas.length === 0) {

        lista.innerHTML = `
            <p>Nenhuma vaga encontrada.</p>
        `;

        return;
    }


    // CRIA OS CARDS
    vagasFiltradas.forEach(vaga => {

        // pega o índice do vaga no array original p/ passar pro Saiba mais
        const indiceOriginal = vagas.indexOf(vaga);

        lista.innerHTML += `

            <div class="vaga-card">

                <div class="imagem-ong">

                    <img
                        src="${vaga.imagem || 'img/ong.png'}"
                        alt="ONG"
                    >

                </div>

                <div class="info-vaga">

                    <h2>${vaga.titulo || vaga.título || 'Vaga sem título'}</h2>

                    <p>
                        <strong>Horário:</strong>
                        ${vaga.cargaHoraria}
                    </p>

                    <p>
                        <strong>Local:</strong>
                        ${vaga.localizacao}
                    </p>

                    <p>
                        <strong>Modalidade:</strong>
                        ${vaga.modalidade}
                    </p>

                    <p>
                        <strong>Descrição:</strong>
                        ${vaga.descricao}
                    </p>

                </div>

                <div class="botao-vaga">

                    <a href="../telaSaibaMaisOng/saibaMaisOng.html?idx=${indiceOriginal}">
                        Saiba mais >>
                    </a>

                </div>

            </div>

        `;
    });
}


// EVENTOS DOS FILTROS
filtroModalidade.addEventListener(
    "change",
    mostrarVagas
);

filtroEstado.addEventListener(
    "change",
    mostrarVagas
);


mostrarVagas();

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