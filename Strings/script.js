const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const mostraPalavrasChave = processaTexto(texto);


    campoResultado.textContent = PalavrasChave.join(", ");
}

function processaTexto (texto){
    let palavras = texto.split(/\P{L}+/u);
    const frequencias = contaFrequencias(palavras)
    let ordenadas = Object.keys(frequencias).sort();
    console.log(ordenadas);
    return palavras
}
  
function contaFrequencias(palavras){
    let frequencias = [];
    for(let i in palavras){
        frequencias [i] = 0;
        for (let i in palavras) {
            if (i == j){
                frequencias[i]++;
            }
        }
    }

    console.log(frequencias);
    return palavras;
}
 
    return frequencias;
