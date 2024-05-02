//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

alert('Bem vindo ao cont! ');
let numeroEntrada = prompt(`Escolha um número para contagem progressiva`);

if(numeroEntrada <= 0){
    while (numeroEntrada <= 0){
        alert(numeroEntrada ++)
    }
}else{
    alert('Por gentileza recarregue a página e coloque um número válido.')
}
