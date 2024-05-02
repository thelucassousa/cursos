//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function valorTabuada (valorTabuada){
    let n1 = 10;
    while(n1 >= 0){
        console.log(`${valorTabuada} X ${n1} = ${valorTabuada* n1}`)
        n1 --;
    }
}
valorTabuada(10);