//Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".

let idadeUsuario = prompt('Qual sua idade? ');
if (idadeUsuario >= 18){
    console.log(`Parabéns, você já pode tirar a habilitação`)
}else{
    console.log(`Que pena, você ainda tem ${idadeUsuario}, espere só mais ${idadeUsuario - 18} anos para poder estar tirando.`)
}