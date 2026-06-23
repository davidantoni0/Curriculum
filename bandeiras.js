
const boxEua = document.querySelector('.box-eua')

for (let i = 0; i < 50; i++) {
    const estrela = document.createElement('div');
    estrela.className = 'estrela-eua';
    boxEua.appendChild(estrela);
}


const bandeira = document.querySelector('.EstadosUnidos')

const mostrarfaixa = ()=>{
    for (let i = 0; i < 6; i++) {
        const fxVermelha = document.createElement('div');
        const fxBranca = document.createElement('div');
        fxVermelha.className = 'fx-vermelha';
        fxBranca.className = 'fx-branca';
        bandeira.appendChild(fxVermelha);
        bandeira.appendChild(fxBranca);
    }
    const fxVermelha = document.createElement('div');
    bandeira.appendChild(fxVermelha);
    
}
mostrarfaixa()

