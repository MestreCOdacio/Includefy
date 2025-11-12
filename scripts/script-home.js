// Espera o documento HTML carregar antes de executar o script
document.addEventListener("DOMContentLoaded", function() {

    // 1. Seleciona TODOS os links que têm a classe "link-home"
    const linksDoMenu = document.querySelectorAll(".link-home");

    // 2. Itera sobre cada link encontrado
    linksDoMenu.forEach(function(linkClicado) {
        
        // 3. Adiciona um "ouvinte" de clique a este link
        linkClicado.addEventListener("click", function(event) {
            
            // Impede o link de realmente navegar (caso ele tenha um href)
            event.preventDefault(); 

            // 4. Remove a classe "selecionado" de TODOS os links
            linksDoMenu.forEach(function(link) {
                link.classList.remove("selecionado");
            });

            // 5. Adiciona a classe "selecionado" APENAS no link que foi clicado
            linkClicado.classList.add("selecionado");
        });
    });

    // Opcional: Deixar o primeiro item selecionado por padrão
    if (linksDoMenu.length > 0) {
        linksDoMenu[0].classList.add("selecionado");
    }

    const mainElement = document.querySelector(".pag-home");

    function ajustarAlturaDoMain() {
        try {
            // Acessa o 'body' da página *dentro* do iframe
            const alturaConteudo = iframe.contentWindow.document.body.scrollHeight;

            // Define a altura do <main> para ser igual à altura do conteúdo
            if (mainElement) {
                mainElement.style.height = alturaConteudo + 'px';
            }
            
            // Também é bom ajustar a altura do próprio iframe
            iframe.style.height = alturaConteudo + 'px';

        } catch (e) {
            console.error("Erro ao ajustar altura do iframe:", e);
            // Isso pode acontecer se as páginas forem de domínios diferentes
        }
    }

    // 3. Adicione um "ouvinte" ao iframe
    // O evento 'load' dispara TODA VEZ que o 'iframe.src' é alterado
    iframe.addEventListener('load', ajustarAlturaDoMain);

    // 4. Chame uma primeira vez (caso o iframe já tenha carregado)
    // (O evento 'load' do DOMContentLoaded pode não pegar o 'load' do iframe)
    ajustarAlturaDoMain(); 

});