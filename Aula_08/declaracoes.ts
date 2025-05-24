let nome: string = 'Vinicius';
let idade: number = 21;
let estaAtivo: Boolean = true;

//arrays 
let numeros: number[] = [1, 2, 3, 4, 5];
let nomes: string[] = ['Vinicius', 'João', 'Maria'];
let mistos: (string | number) [] = ['Vinicius', 21, 'João', 22, 'Maria', 23];
let mistos2: (string | number) [] = ['Vinicius', 21, 'João', 22, 'Maria', 23];

//tuplas
let pessoa: [string, number] = ['Vinicius', 21];

//Union types
let id: number | string = 987
id = 'ABC987'

// Interfaces - são usadas para definir estrutura de objetos
interface Usuario {
    nome: string;
    idade: number;
    email?: string;// opcional
}

//Utilizar elas ficam assim:
let usuario: Usuario = {
    nome: 'Vinicius',
    idade: 21,
};