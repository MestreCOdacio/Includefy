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

    // --- LÓGICA DE AJUSTE DE ALTURA (VERSÃO MELHORADA) ---
    
    function ajustarAltura() {
        try {
            // Pega o 'body' e o 'html' de dentro do iframe
            const body = iframe.contentWindow.document.body;
            const html = iframe.contentWindow.document.documentElement;

            // Mede TODAS as alturas possíveis
            const alturaConteudo = Math.max(
                body.scrollHeight,
                body.offsetHeight,
                html.clientHeight,
                html.scrollHeight,
                html.offsetHeight
            );
            
            // Define a altura (com um pequeno 'respiro' de 10px)
            const alturaFinal = alturaConteudo + 10;

            // Aplica a altura tanto no main quanto no iframe
            mainElement.style.height = alturaFinal + 'px';
            iframe.style.height = alturaFinal + 'px';

        } catch (e) {
            console.error("Erro ao ajustar altura:", e);
        }
    }

    // Dispara o ajuste TODA VEZ que uma nova página carrega no iframe
    iframe.addEventListener('load', ajustarAltura);

    // --- CARGA PADRÃO ---
    if (linksDoMenu.length > 0) {
        linksDoMenu[0].classList.add("selecionado");
        // O 'load' event acima vai cuidar do ajuste inicial da altura.
    }
});