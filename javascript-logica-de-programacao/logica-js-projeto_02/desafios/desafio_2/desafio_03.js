//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function converterValor(valorDolar){
    let palavraDolar = valorDolar > 1 ? 'dolares' : 'dolar';
    let palavraPlural = valorDolar > 1 ? 'dos seus' : 'do seu';
    console.log(`A conversão ${palavraPlural} U$ ${valorDolar} ${palavraDolar } em real é de R$ ${valorDolar * 4.8}`);
}

converterValor(1);
converterValor(200);