//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.


alert('Bem vindo ao number');
let validarNumero = prompt ('Escolha um número: ');

if(validarNumero > 0){
    alert(`O número ${validarNumero} é positivo`)
} else if(validarNumero < 0){
    alert(`O número ${validarNumero} é negativo`)
} else if(validarNumero == 0){
    alert(`O número ${validarNumero} é neutro`)
} else{
    alert(`O "${validarNumero}" não é caracter válido, por gentileza, reinicie a página e tente novamente.`)
}