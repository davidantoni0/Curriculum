

const bandeira = document.querySelector('.EstadosUnidos')

for (let i = 0; i < 6; i++) {
    const fxVermelha = document.createElement('div');
    const fxBranca = document.createElement('div');
    fxVermelha.className = 'fx-vermelha';
    fxBranca.className = 'fx-branca';
    bandeira.appendChild(fxVermelha);
    bandeira.appendChild(fxBranca);
}
const fxVermelha = document.createElement('div');
fxVermelha.className = 'fx-vermelha';
bandeira.appendChild(fxVermelha);



const boxEua = document.querySelector('.box-eua');

for (let linha = 0; linha < 9; linha++) {
    const row = document.createElement('div');
    row.className = 'linha-estrelas';

    const quantidade = linha % 2 === 0 ? 6 : 5;

    for (let i = 0; i < quantidade; i++) {
        const estrela = document.createElement('div');
        estrela.className = 'estrela-eua';
        row.appendChild(estrela);
    }

    boxEua.appendChild(row);
}