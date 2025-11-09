// Factory Method Pattern demo

interface Product { operation(): string }

class ConcreteProductA implements Product { operation() { return "[A]" } }
class ConcreteProductB implements Product { operation() { return "[B]" } }

abstract class Creator {
  public abstract factoryMethod(): Product
  public someOperation(): string {
    const product = this.factoryMethod()
    return `Creator: worked with product ${product.operation()}`
  }
}

class ConcreteCreatorA extends Creator { factoryMethod(): Product { return new ConcreteProductA() } }
class ConcreteCreatorB extends Creator { factoryMethod(): Product { return new ConcreteProductB() } }

export function runFactoryMethodDemo() {
  const creators: Creator[] = [new ConcreteCreatorA(), new ConcreteCreatorB()]
  for (const c of creators) console.log(c.someOperation())
}

if (require.main === module) {
  runFactoryMethodDemo()
}

