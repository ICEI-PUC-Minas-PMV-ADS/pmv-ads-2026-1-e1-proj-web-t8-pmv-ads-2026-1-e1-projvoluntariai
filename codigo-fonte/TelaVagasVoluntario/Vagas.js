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


    // FILTRA VAGAS
    const vagasFiltradas = vagas.filter(vaga => {

        const filtroModalidadeOk =
        modalidadeSelecionada === "" ||
        vaga.modalidade === modalidadeSelecionada;

        const filtroEstadoOk =
        estadoSelecionado === "" ||
        vaga.estado === estadoSelecionado;

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

        lista.innerHTML += `

            <div class="vaga-card">

                <div class="imagem-ong">

                    <img
                        src="${vaga.imagem || 'img/ong.png'}"
                        alt="ONG"
                    >

                </div>

                <div class="info-vaga">

                    <h2>${vaga.título}</h2>

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

                    <a href="detalhes.html">
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