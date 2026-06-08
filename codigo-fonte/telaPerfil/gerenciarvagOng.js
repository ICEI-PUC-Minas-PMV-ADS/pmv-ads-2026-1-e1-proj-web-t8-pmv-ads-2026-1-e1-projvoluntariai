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
