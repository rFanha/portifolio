
// Elementos usados para abrir e fechar o menu mobile.
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let btnFechar = document.querySelector('.btn-fechar');
let overlay = document.querySelector('.overlay-menu');
let linksMenu = document.querySelectorAll('.menu-mobile a');
let linksInternos = document.querySelectorAll('a[href^="#"]');

// Faz a página rolar de forma mais suave e um pouco mais lenta.
function scrollSuavePara(destino) {
    const posicaoInicial = window.pageYOffset;
    const posicaoFinal = destino.getBoundingClientRect().top + window.pageYOffset;
    const distancia = posicaoFinal - posicaoInicial;
    const duracao = 1200;
    let inicio = null;

    function animarScroll(tempoAtual) {
        if (!inicio) {
            inicio = tempoAtual;
        }

        const tempoDecorrido = tempoAtual - inicio;
        const progresso = Math.min(tempoDecorrido / duracao, 1);
        const suavizacao = 1 - Math.pow(1 - progresso, 3);

        window.scrollTo(0, posicaoInicial + distancia * suavizacao);

        if (tempoDecorrido < duracao) {
            requestAnimationFrame(animarScroll);
        }
    }

    requestAnimationFrame(animarScroll);
}

// Abre o menu ao clicar no ícone de menu.
btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
});

// Fecha o menu ao clicar no botão "X".
btnFechar.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});

// Fecha o menu ao clicar fora dele.
overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});

// Fecha o menu ao selecionar uma opção de navegação.
linksMenu.forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
    });
});

// Intercepta links internos para aplicar uma rolagem mais lenta.
linksInternos.forEach((link) => {
    link.addEventListener('click', (event) => {
        const destinoId = link.getAttribute('href');

        if (!destinoId || destinoId === '#') {
            return;
        }

        const secaoDestino = document.querySelector(destinoId);

        if (!secaoDestino) {
            return;
        }

        event.preventDefault();
        scrollSuavePara(secaoDestino);
    });
});
