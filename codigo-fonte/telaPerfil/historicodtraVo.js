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
// =====================================
// CARREGAR DADOS
// =====================================

    nomeSidebar.innerText =
    usuarioLogado.nome || "Volutário";



    
// =====================================
// FOTO SIDEBAR
// =====================================

if (usuarioLogado.foto) {

    fotoSidebar.innerHTML =
        `<img src="${usuarioLogado.foto}" alt="Foto de Perfil">`;

}