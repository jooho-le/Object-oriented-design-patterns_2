"use strict";
// Factory Method Pattern demo
Object.defineProperty(exports, "__esModule", { value: true });
exports.runFactoryMethodDemo = runFactoryMethodDemo;
class ConcreteProductA {
    operation() { return "[A]"; }
}
class ConcreteProductB {
    operation() { return "[B]"; }
}
class Creator {
    someOperation() {
        const product = this.factoryMethod();
        return `Creator: worked with product ${product.operation()}`;
    }
}
class ConcreteCreatorA extends Creator {
    factoryMethod() { return new ConcreteProductA(); }
}
class ConcreteCreatorB extends Creator {
    factoryMethod() { return new ConcreteProductB(); }
}
function runFactoryMethodDemo() {
    const creators = [new ConcreteCreatorA(), new ConcreteCreatorB()];
    for (const c of creators)
        console.log(c.someOperation());
}
if (require.main === module) {
    runFactoryMethodDemo();
}
