//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.


alert('Bem vindo ao cont! ');
let numeroEntrada = prompt(`Escolha um número para contagem regressiva`);

if(numeroEntrada >= 0){
    while (numeroEntrada >= 0){
        alert(numeroEntrada --)
    }
}else{
    alert('Por gentileza recarregue a página e coloque um número válido.')
}
