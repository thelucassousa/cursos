//função sortear está conectando com o sortear do html.
function sortear(){
    //se eu não colocasse o '.value', eu não conseguiria atribuir a minha variável o valor do input, estaria passando somente o input para ela. 
    let inputQuantidade = parseInt(document.getElementById('quantidade').value); 
    let inputDe = parseInt(document.getElementById('de').value);
    let inputAte = parseInt(document.getElementById('ate').value);

    let numerosSortidos = [];
    let numeros;

    for(let i = 0; i < inputQuantidade; i++){
        numeros = obterNumeroAleatorio(inputDe, inputAte);
        while(numerosSortidos.includes(numeros)){
            numeros = obterNumeroAleatorio(inputDe, inputAte);  
        }
        numerosSortidos.push(numeros);
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSortidos} </label>`;

}


function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}