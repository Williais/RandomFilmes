let selecaoFilmes = []
let filmesAssistidos = []

const inputFilme = document.getElementById('inputFilme')
const btnAdicionar = document.getElementById('btnAdicionar')
const filmesParaAssistir = document.getElementById('filmesParaAssistir')
const jaAssistidos = document.getElementById('filmesAssistidos')

const filmeSorteado = document.getElementById('filmeSorteado')
const btnRandom = document.getElementById('btnRandom')

function salvarListaLS() {

    localStorage.setItem('listaParaAssistir', JSON.stringify(selecaoFilmes))

    localStorage.setItem('listaAssistidos', JSON.stringify(filmesAssistidos))
}

function carregarListaLS() {

    const listaParaAssistirSalva = localStorage.getItem('listaParaAssistir')
    const listaAssistidosSalva = localStorage.getItem('listaAssistidos')

    if (listaParaAssistirSalva) {

        selecaoFilmes = JSON.parse(listaParaAssistirSalva)
    }

    if (listaAssistidosSalva) {

        filmeSorteado = JSON.parse(listaAssistidosSalva)
    }
}

function renderizarListas() {
    filmesParaAssistir.innerHTML = ''
    jaAssistidos.innerHTML = ''

    if (selecaoFilmes.length === 0) {
        
        filmesParaAssistir.innerHTML = "<h5>Nenhum filme adicionado.</h5>"

    } else {
        selecaoFilmes.forEach((filme) => {
            filmesParaAssistir.innerHTML += `<p>${filme}</p>`
        });
    }

    if (filmesAssistidos.length === 0) {
        
        jaAssistidos.innerHTML = "<h5>Nenhum filme assistido.</h5>"
    } else {
        filmesAssistidos.forEach((filme) => {
            jaAssistidos.innerHTML += `<p>${filme}</p>`
        });
    }
        
}

// Mudança de tela

function mudarTelas() {

    const btnSortearFilme = document.getElementById('btnSortearFilme')
    const btnAdicionarFilme = document.getElementById('btnAdicionarFilmes')

    const telaAdicionarFilme = document.getElementById('telaAdicionarFilmes')
    const telaSortearFilme = document.getElementById('telaFilmeSorteado')

    btnSortearFilme.addEventListener('click', () => {
        telaAdicionarFilme.classList.add('escondido')
        telaSortearFilme.classList.remove('escondido')
    });

    btnAdicionarFilme.addEventListener('click', () => {
        telaSortearFilme.classList.add('escondido')
        telaAdicionarFilme.classList.remove('escondido')

    });
}

    
btnAdicionar.addEventListener('click', () => {

    const novoFilme = inputFilme.value.trim()

    if(novoFilme !== ''){

        selecaoFilmes.push(novoFilme)

        inputFilme.value = ''

        renderizarListas()
        salvarListaLS()
    }
})

btnRandom.addEventListener('click', () =>{

    const totalDeFilmes = selecaoFilmes.length

    if (totalDeFilmes !== 0) {
        const indiceAleatorio = Math.floor(Math.random() * totalDeFilmes)

        const filmeEscolhido = selecaoFilmes[indiceAleatorio]

        filmesAssistidos.push(filmeEscolhido)

        selecaoFilmes.slice(indiceAleatorio, 1)

        filmeSorteado.textContent = filmeEscolhido

        renderizarListas()
        salvarListaLS()
    }
})


mudarTelas()
renderizarListas()
carregarListaLS()
