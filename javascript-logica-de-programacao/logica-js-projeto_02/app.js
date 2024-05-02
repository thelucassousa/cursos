let escolhaAte = 100;
let numeroSecreto = gerarNumeroSecreto();
let qtdeTentativas = 1;
console.log(numeroSecreto);

//melhorando com função
// let titulo = document.querySelector('.titulo__paragrafo');
// titulo.innerHTML = 'Jogo do número Secreto';
// let texto__paragrafo = document.querySelector('.texto__paragrafo');
// texto__paragrafo.innerHTML = `Escolha um número entre 1 e ${escolhaAte}`;


function escreverNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

escreverNaTela('.titulo__paragrafo', 'Jogo do número Secreto');
escreverNaTela('.texto__paragrafo', `Escolha um número entre 1 e ${escolhaAte}`);

//btn verificar o chute

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        escreverNaTela('.titulo__paragrafo', 'Você acertou!!');
        let palavraTentativa = qtdeTentativas > 1? 'tentativas':'tentativa';
        escreverNaTela('.texto__paragrafo', `Parabéns! Você descobriu o número ${numeroSecreto}, com ${qtdeTentativas} ${palavraTentativa}.`);
        alterarBtn('novoJogo');
        alterarBtn('reiniciar');
    
    } else{
        if(chute > numeroSecreto){
            escreverNaTela('.texto__paragrafo', `O número secreto é menor que ${chute}`);
        } else{
            escreverNaTela('.texto__paragrafo', `O número secreto é maior que ${chute}`);
        }
        qtdeTentativas++;
        limparCampo();
    }
    console.log(chute == numeroSecreto);
}

function reiniciarJogo(){
    window.location.reload(true);
}


function gerarNumeroSecreto(){
    return parseInt(Math.random() * escolhaAte + 1)
}

function limparCampo(){
    chute = document.querySelector('input');
    chute = '';
}


//habilitar ou desabilitar os botões
function alterarBtn(btn){
    if(document.getElementById(btn).disabled == true){
        document.getElementById(btn).disabled = false
    } else{
        document.getElementById(btn).disabled = true
    }
}
