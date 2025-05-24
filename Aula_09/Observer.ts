interface Observer {
  update(evento: string): void;
}

class Painel implements Observer {
  update(evento: string) {
    console.log(`Painel: ${evento}`);
  }
}

class LuzDeFreio implements Observer {
  update(evento: string) {
    console.log(`Luz de freio ativada: ${evento}`);
  }
}

class AlertaSonoro implements Observer {
  update(evento: string) {
    console.log(`Alerta sonoro: ${evento}`);
  }
}

class Freio {
  private observers: Observer[] = [];

  registrar(observer: Observer) {
    this.observers.push(observer);
  }

  remover(observer: Observer) {
    this.observers = this.observers.filter(o => o !== observer);
  }

  pressionar() {
    console.log('Freio pressionado!');
    this.notificar('Freio acionado');
  }

  private notificar(evento: string) {
    this.observers.forEach(o => o.update(evento));
  }
}

console.log('--- Observer Pattern ---');
const freio = new Freio();
const painel = new Painel();
const luz = new LuzDeFreio();
const alerta = new AlertaSonoro();

freio.registrar(painel);
freio.registrar(luz);
freio.registrar(alerta);

freio.pressionar();
console.log('\n');