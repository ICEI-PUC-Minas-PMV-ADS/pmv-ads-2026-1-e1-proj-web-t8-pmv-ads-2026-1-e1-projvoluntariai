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

const listaHistorico =
    document.getElementById("listaHistorico");

const pesquisa =
    document.getElementById("pesquisa");
// =====================================
// CARREGAR DADOS
// =====================================

    nomeSidebar.innerText =
    (usuarioLogado && usuarioLogado.nome) || "Voluntário";




// =====================================
// FOTO SIDEBAR
// =====================================

if (usuarioLogado && usuarioLogado.foto) {

    fotoSidebar.innerHTML =
        `<img src="${usuarioLogado.foto}" alt="Foto de Perfil">`;

}


// =====================================
// LISTAR HISTÓRICO (INSCRIÇÕES DO VOLUNTÁRIO)
// =====================================

const imagemPadrao =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTIwIDEyMCI+PHJlY3Qgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIHJ4PSI4IiBmaWxsPSIjZTZlNmU2Ii8+PGNpcmNsZSBjeD0iNjAiIGN5PSI0OCIgcj0iMjIiIGZpbGw9IiNiZGJkYmQiLz48cGF0aCBkPSJNMjggMTA0YzAtMTggMTQtMzAgMzItMzBzMzIgMTIgMzIgMzB6IiBmaWxsPSIjYmRiZGJkIi8+PC9zdmc+";

function mostrarHistorico(termo) {
    const todas =
        JSON.parse(localStorage.getItem("inscricoes")) || [];

    const nome = usuarioLogado ? usuarioLogado.nome : "";

    // só as inscrições do voluntário logado
    const minhas = todas.filter(i => i.nomeVoluntario === nome);

    const filtro = (termo || "").trim().toLowerCase();

    const filtradas = minhas.filter(i => {
        const vaga = (i.nomeVaga || "").toLowerCase();
        const ong = (i.nomeOng || "").toLowerCase();
        return vaga.includes(filtro) || ong.includes(filtro);
    });

    listaHistorico.innerHTML = "";

    if (filtradas.length === 0) {
        listaHistorico.innerHTML =
            "<p style='margin-left:20px;color:#777;'>Nenhum histórico encontrado.</p>";
        return;
    }

    filtradas.forEach(i => {
        const situacao = i.status === "validado" ? "Validado" : "Pendente";

        listaHistorico.innerHTML += `
            <div class="card-vaga">
                <div class="imagem-ong">
                    <img src="${imagemPadrao}" alt="ONG">
                </div>
                <div class="info-vaga">
                    <p><strong>Nome da ONG:</strong> ${i.nomeOng || "—"}</p>
                    <p><strong>Nome da Vaga:</strong> ${i.nomeVaga || "—"}</p>
                    <p><strong>Localização:</strong> ${i.localizacao || "—"}</p>
                    <p><strong>Horas Trabalhadas:</strong> ${i.horas || 0}h</p>
                    <p><strong>Situação:</strong> ${situacao}</p>
                </div>
            </div>
        `;
    });
}

pesquisa.addEventListener("input", function() {
    mostrarHistorico(this.value);
});

mostrarHistorico();
