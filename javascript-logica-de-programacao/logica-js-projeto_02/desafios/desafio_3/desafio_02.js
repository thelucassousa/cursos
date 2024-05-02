//Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
//Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
//exiba no console apenas o primeiro elemento;
// exiba no console apenas o segundo elemento;
//exiba no console apenas o último elemento



let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];

linguagensDeProgramacao.push( 'Java');
linguagensDeProgramacao.push( 'Ruby');
linguagensDeProgramacao.push( 'GoLang');


console.log(`primeiro elemento na lista de linguagens é ${linguagensDeProgramacao[0]}`);
console.log(`segundo elemento na lista de linguagens é ${linguagensDeProgramacao[1]}`);
console.log(`primeiro elemento na lista de linguagens é ${linguagensDeProgramacao[linguagensDeProgramacao.length-1]}`);