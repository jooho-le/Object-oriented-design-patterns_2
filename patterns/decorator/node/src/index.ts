// Decorator Pattern demo

interface Component { operation(): string }
class ConcreteComponent implements Component { operation() { return "Base" } }

class Decorator implements Component {
  constructor(protected wrappee: Component) {}
  operation(): string { return this.wrappee.operation() }
}

class ConcreteDecoratorA extends Decorator {
  operation(): string { return `A(${super.operation()})` }
}

class ConcreteDecoratorB extends Decorator {
  operation(): string { return `B(${super.operation()})` }
}

export function runDecoratorDemo() {
  const base = new ConcreteComponent()
  const decorated = new ConcreteDecoratorB(new ConcreteDecoratorA(base))
  console.log(decorated.operation())
}

if (require.main === module) runDecoratorDemo()

