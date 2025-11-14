/* scripts/script-home.js (VERSÃO FINAL E ROBUSTA) */

document.addEventListener("DOMContentLoaded", function() {

    // --- SELEÇÃO DOS ELEMENTOS ---
    const linksDoMenu = document.querySelectorAll(".link-home");
    const iframe = document.getElementById("home-frame");
    const mainElement = document.querySelector(".pag-home"); 

    // --- MAPA DE PÁGINAS ---
    const caminhosDasPaginas = {
        "link-para-voce": "Home-Pages/ForYou.html",
        "link-seguindo": "Home-Pages/Seguindo.html",
        "link-em-alta": "Home-Pages/Em-Alta.html"
    };

    // --- LÓGICA DO MENU (MUDAR COR E SRC) ---
    linksDoMenu.forEach(function(linkClicado) {
        linkClicado.addEventListener("click", function(event) {
            event.preventDefault(); 
            const idDoLink = linkClicado.id;

            // 1. Mudar o estilo
            linksDoMenu.forEach(function(link) {
                link.classList.remove("selecionado");
            });
            linkClicado.classList.add("selecionado");

            // 2. Mudar o src do iframe
            if (caminhosDasPaginas[idDoLink]) {
                iframe.src = caminhosDasPaginas[idDoLink];
            }
        });
    });
