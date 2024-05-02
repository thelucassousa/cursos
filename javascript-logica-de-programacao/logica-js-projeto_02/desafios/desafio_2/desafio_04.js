//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function calculoRetangulo(base, altura){
    let areaRetangulo = base * altura;
    let baseRetangulo = 2 * (base + altura);
    console.log(`A base do retangulo é de ${baseRetangulo}m e a área do retangulo é de ${areaRetangulo}m`)
}

calculoRetangulo(2, 4)