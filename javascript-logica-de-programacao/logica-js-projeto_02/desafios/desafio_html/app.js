// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio. - ok

// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado. - ok

// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado. - ok

// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você. - ok

// Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta. -ok


let titulo = document.querySelector('h1');
titulo.innerHTML = ('Hora do Desafio');

function verificarConsole(){
    console.log('clicks');
}
function verificarAlerta(){
    alert('Eu amo JS');
}

function verificarPrompt(){
    let nomeCidade = prompt('Me diga um nome de uma cidade do Brasil: ');
    alert(`Estive em ${nomeCidade} e lembrei de você.`);
}

function verificarSoma(){
    let numero_01 = parseInt(prompt('Me diga um número para somar.'))
    let numero_02 = parseInt(prompt('Me diga outro número para somar.'))
    alert(`A soma de ${numero_01} + ${numero_02} é de ${numero_01 + numero_02}`)
}