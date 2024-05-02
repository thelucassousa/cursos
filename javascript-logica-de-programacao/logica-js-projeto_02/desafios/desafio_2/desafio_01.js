//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function imc(altura, peso){
    let calculoImc = peso / (altura * altura);
    return calculoImc;
}


console.log(imc(1.96, 96.5));