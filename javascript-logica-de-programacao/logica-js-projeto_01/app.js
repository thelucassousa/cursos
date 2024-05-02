alert('Boas vindas ao jogo do número secreto!');

let numeroEscolhido = prompt('Escolha até que número você quer: ')
let numeroSecreto = parseInt(Math.random() * numeroEscolhido + 1);
let chute;
let tentativas = 1;


while(chute != numeroSecreto){ 
    chute =  prompt(`Escolha um número entre 1 a ${numeroEscolhido}`);
    if (numeroSecreto == chute){
        break;
    } else {
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`)
        } else{
            alert(`O número secreto é maior que ${chute}`)
        }
        tentativas++;
    }
}

let palavraSingula = tentativas > 1 ? 'tentativas' : 'tentativa'

alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraSingula}`);

