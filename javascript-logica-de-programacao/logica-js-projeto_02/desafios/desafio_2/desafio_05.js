//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calculoCircular(raio){
    let pi = 3.14
    let calculoArea = pi * (raio * raio) 
    let calculoPerimetro = 2 * pi * raio
    console.log(`A área do circulo é de ${calculoArea} e o perimetro é de ${calculoPerimetro}`);
}

calculoCircular(3)