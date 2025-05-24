interface ModoDeDirecao {
  dirigir(): void;
}

class ModoEsportivo implements ModoDeDirecao { // Renamed to avoid conflict
  dirigir() {
    console.log('Modo Esportivo: Potência máxima!');
  }
}

class ModoEconomico implements ModoDeDirecao { // Renamed to avoid conflict
  dirigir() {
    console.log('Modo Econômico: Economia de combustível.');
  }
}

class ModoOffRoad implements ModoDeDirecao { // Renamed to avoid conflict
  dirigir() {
    console.log('Modo Off-road: Preparado para terrenos difíceis.');
  }
}

class CarroComModo { // Renamed to avoid conflict
  constructor(private modo: ModoDeDirecao) {}

  setModo(modo: ModoDeDirecao) {
    this.modo = modo;
  }

  dirigir() {
    this.modo.dirigir();
  }
}

console.log('--- Strategy Pattern ---');
const meuCarroEstrategia = new CarroComModo(new ModoEsportivo());
meuCarroEstrategia.dirigir();

meuCarroEstrategia.setModo(new ModoEconomico());
meuCarroEstrategia.dirigir();

meuCarroEstrategia.setModo(new ModoOffRoad());
meuCarroEstrategia.dirigir();
console.log('\n');
