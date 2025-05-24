function saudacao(nome) {
    return "Ol\u00E1, ".concat(nome, "!");
}
console.log(saudacao('Vinicius'));
// utilizando a interface usuario fica assim:
function exibirUsuario(usuario) {
    console.log("Nome: ".concat(usuario.nome));
    console.log("Idade: ".concat(usuario.idade));
}
exibirUsuario({ nome: 'Vinicius', idade: 21 });
//Exemplo de uma função que retorna arrays e tem parametros opcionais
function ListarNomes(nomes) {
    nomes.forEach(function (nome) { return console.log(nome); });
}
ListarNomes(['Vinicius', 'João', 'Maria']);
