//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

let numero = prompt('Escolha um número: ');

if(numero > 0){
    console.log('Seu número é positivo');
} else if (numero < 0){
    console.log('Seu número é negativo');
} else{
    console.log('Seu número é 0')
}