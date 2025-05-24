class Carro {
  marca: string;

  constructor(marca: string) {
    this.marca = marca;
  }
}

const carro1 = new Carro('Toyota'); // Instância do Carro
const carro2 = new Carro('Honda');  // Outra instância

console.log(carro1.marca); // Toyota
console.log(carro2.marca); // Honda
