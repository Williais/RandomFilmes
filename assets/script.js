






// Mudança de tela

function mudarTelas() {

    const btnSortearFilme = document.getElementById('btnSortearFilme');
    const btnAdicionarFilme = document.getElementById('btnAdicionarFilmes');

    const telaAdicionarFilme = document.getElementById('telaAdicionarFilmes');
    const telaSortearFilme = document.getElementById('telaFilmeSorteado');

    btnSortearFilme.addEventListener('click', () => {
        telaAdicionarFilme.classList.add('escondido');
        telaSortearFilme.classList.remove('escondido');
    });

    btnAdicionarFilme.addEventListener('click', () => {
        telaSortearFilme.classList.add('escondido');
        telaAdicionarFilme.classList.remove('escondido');

        console.log('clicou');
    });
}

mudarTelas();