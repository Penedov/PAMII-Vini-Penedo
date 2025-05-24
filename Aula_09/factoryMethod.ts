interface Carro { // Note: This is an interface, distinct from CarroBase class
  dirigir(): void;
}

class SUV implements Carro {
  dirigir() {
    console.log('Dirigindo um SUV');
  }
}

class Esportivo implements Carro {
  dirigir() {
    console.log('Dirigindo um Carro Esportivo');
  }
}

class Sedan implements Carro {
  dirigir() {
    console.log('Dirigindo um Sedan');
  }
}

class Montadora {
  static fabricarCarro(tipo: string): Carro {
    if (tipo === 'SUV') {
      return new SUV();
    } else if (tipo === 'Esportivo') {
      return new Esportivo();
    } else if (tipo === 'Sedan') {
      return new Sedan();
    } else {
      throw new Error('Tipo de carro desconhecido');
    }
  }
}

const meuCarroFactory = Montadora.fabricarCarro('Esportivo');
meuCarroFactory.dirigir();