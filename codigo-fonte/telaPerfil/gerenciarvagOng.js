// =====================================
// USUÁRIO LOGADO
// =====================================

let usuarioLogado =
    JSON.parse(
        localStorage.getItem("loggedUser")
    );

if (!usuarioLogado) {

    alert("Nenhum usuário logado.");

    window.location.href =
        "../telaLogin/login.html";
}
// =====================================
// ELEMENTOS
// =====================================

    const nomeSidebar =
    document.getElementById("nomeSidebar");

    const fotoSidebar =
    document.getElementById(
        "fotoSidebar"
    );
 const btncriar =
    document.getElementById("btncriar");

const listaVagas =
    document.getElementById("listaVagas");

const pesquisa =
    document.getElementById("pesquisa");
// =====================================
// CARREGAR DADOS
// =====================================

    nomeSidebar.innerText =
    usuarioLogado.nome || "ONG";




// =====================================
// FOTO SIDEBAR
// =====================================

if (usuarioLogado.foto) {

    fotoSidebar.innerHTML =
        `<img src="${usuarioLogado.foto}" alt="Foto de Perfil">`;

}

//criar vagas//

btncriar.addEventListener(
    "click", () => {
    window.location.href =
    "../telaCadastroDeVagas/etapa1.html"
    }
);


// =====================================
// LISTAR VAGAS PUBLICADAS
// =====================================

const imagemPadrao =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTIwIDEyMCI+PHJlY3Qgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIHJ4PSI4IiBmaWxsPSIjZTZlNmU2Ii8+PGNpcmNsZSBjeD0iNjAiIGN5PSI0OCIgcj0iMjIiIGZpbGw9IiNiZGJkYmQiLz48cGF0aCBkPSJNMjggMTA0YzAtMTggMTQtMzAgMzItMzBzMzIgMTIgMzIgMzB6IiBmaWxsPSIjYmRiZGJkIi8+PC9zdmc+";

function contarInscritos(tituloVaga) {
    const inscricoes =
        JSON.parse(localStorage.getItem("inscricoes")) || [];

    return inscricoes.filter(i => i.nomeVaga === tituloVaga).length;
}

function mostrarVagas(termo) {
    const vagas =
        JSON.parse(localStorage.getItem("vagas")) || [];

    const filtro = (termo || "").trim().toLowerCase();

    const filtradas = vagas.filter(v => {
        const titulo = (v.titulo || "").toLowerCase();
        return titulo.includes(filtro);
    });

    listaVagas.innerHTML = "";

    if (filtradas.length === 0) {
        listaVagas.innerHTML =
            "<p style='margin-left:20px;color:#777;'>Nenhuma vaga publicada.</p>";
        return;
    }

    filtradas.forEach(v => {
        const imagem = v.imagem || imagemPadrao;
        const dataPub = v.dataInicio || "—";
        const inscritos = contarInscritos(v.titulo);

        listaVagas.innerHTML += `
            <div class="card-vaga">
                <div class="imagem-ong">
                    <img src="${imagem}" alt="ONG">
                </div>
                <div class="info-vaga">
                    <p><strong>Nome da vaga:</strong> ${v.titulo || "—"}</p>
                    <p><strong>Descrição:</strong> ${v.descricao || "—"}</p>
                    <p><strong>Data de publicação:</strong> ${dataPub}</p>
                    <p><strong>Número de inscritos:</strong> ${inscritos}</p>
                </div>
            </div>
        `;
    });
}

pesquisa.addEventListener("input", function() {
    mostrarVagas(this.value);
});

mostrarVagas();
