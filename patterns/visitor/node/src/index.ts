// Visitor Pattern demo

interface Visitor {
  visitA(e: ElementA): void
  visitB(e: ElementB): void
}

interface Element { accept(v: Visitor): void }

class ElementA implements Element { accept(v: Visitor) { v.visitA(this) } info() { return "A" } }
class ElementB implements Element { accept(v: Visitor) { v.visitB(this) } info() { return "B" } }

class ConcreteVisitor implements Visitor {
  visitA(e: ElementA) { console.log(`Visited ${e.info()}`) }
  visitB(e: ElementB) { console.log(`Visited ${e.info()}`) }
}

export function runVisitorDemo() {
  const elements: Element[] = [new ElementA(), new ElementB()]
  const v = new ConcreteVisitor()
  for (const e of elements) e.accept(v)
}

if (require.main === module) runVisitorDemo()

