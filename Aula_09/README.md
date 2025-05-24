# Aula 09: Design Patterns em TypeScript

Esta aula explora a implementação de diversos padrões de projeto (Design Patterns) utilizando TypeScript. Cada padrão é demonstrado em um arquivo separado, mostrando como aplicá-los em cenários práticos.

## Padrões Abordados

### 1. Strategy Pattern
- **Arquivo:** `Strategy.ts`
- **Descrição:** O padrão Strategy permite definir uma família de algoritmos, encapsular cada um deles e torná-los intercambiáveis. Isso permite que o algoritmo varie independentemente dos clientes que o utilizam.
- **Exemplo:** No código, diferentes modos de direção (`ModoEsportivo`, `ModoEconomico`, `ModoOffRoad`) são implementados como estratégias que podem ser atribuídas a um `CarroComModo`.

### 2. Singleton Pattern
- **Arquivo:** `singleton.ts`
- **Descrição:** O padrão Singleton garante que uma classe tenha apenas uma instância e fornece um ponto de acesso global a essa instância.
- **Exemplo:** A classe `CentralDeTrafego` é implementada como um Singleton, garantindo que exista apenas uma central de tráfego no sistema, responsável por emitir alertas.

### 3. Observer Pattern
- **Arquivo:** `Observer.ts`
- **Descrição:** O padrão Observer define uma dependência um-para-muitos entre objetos, de modo que quando um objeto (o "sujeito" ou "observável") muda de estado, todos os seus dependentes (os "observadores") são notificados e atualizados automaticamente.
- **Exemplo:** A classe `Freio` atua como o sujeito. Quando o freio é pressionado, ele notifica os observadores registrados (`Painel`, `LuzDeFreio`, `AlertaSonoro`), que reagem ao evento.

### 4. Factory Method Pattern (Static Factory)
- **Arquivo:** `factoryMethod.ts`
- **Descrição:** O padrão Factory Method define uma interface para criar um objeto, mas deixa as subclasses decidirem qual classe instanciar. O Factory Method permite que uma classe adie a instanciação para subclasses. No exemplo fornecido, temos uma variação mais simples, um *Static Factory Method*, onde um método estático é responsável por criar objetos de diferentes tipos.
- **Exemplo:** A classe `Montadora` possui um método estático `fabricarCarro` que cria diferentes tipos de carros (`SUV`, `Esportivo`, `Sedan`) com base em um parâmetro.

### 5. Exemplo Básico de Classe e Objeto
- **Arquivo:** `Molde.ts`
- **Descrição:** Este arquivo demonstra a criação básica de uma classe `Carro` e a instanciação de objetos a partir dela. Serve como um exemplo fundamental de programação orientada a objetos.
- **Exemplo:** Duas instâncias da classe `Carro` (`carro1` e `carro2`) são criadas com marcas diferentes.

## Como Executar os Exemplos

Cada arquivo `.ts` pode ser compilado e executado individualmente usando o compilador TypeScript (`tsc`) e Node.js.

Por exemplo, para o `Strategy.ts`:
1. Compile: `tsc Strategy.ts`
2. Execute: `node Strategy.js`

Repita o processo para os outros arquivos.