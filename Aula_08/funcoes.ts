function saudacao (nome:string): string{
    return `Olá, ${nome}!`;
}

console.log(saudacao('Vinicius'));

//Interface para onjeto Usuario
interface Usuario {
    nome: string;
    idade: number;
    email?: string;
}

// utilizando a interface usuario fica assim:

function exibirUsuario(usuario: Usuario): void {
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade}`);
}

exibirUsuario ({nome: 'Vinicius', idade: 21});

//Exemplo de uma função que retorna arrays e tem parametros opcionais

function ListarNomes(nomes:string[]): void{
    nomes.forEach(nome => console.log(nome));
}

ListarNomes(['Vinicius','João','Maria'])