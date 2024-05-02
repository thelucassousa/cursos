//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

alert('Bem vindo ao messege!');

let diaSemana = prompt('Escolha um dia da semana: \n 1 - Domingo \n 2 - Segunda-feira \n 3 - Terça-feira \n 4 - Quarta-feira \n 5 - Quinta-feira \n 6 - Sexta-feira \n 7 - Sábado');

if (diaSemana == 1 || diaSemana == 7) {
    alert('Bom final de semana!');
} else if (diaSemana <= 6) {
    alert('Boa semana!');
} else {
    alert('Por favor, recarregue a página e escolha um número válido')
}
