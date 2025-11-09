// Adapter Pattern demo

interface Target { request(): string }

class Adaptee { specificRequest(): string { return "]--Legacy--[" } }

class Adapter implements Target {
  constructor(private adaptee: Adaptee) {}
  request(): string { return `Adapter translates ${this.adaptee.specificRequest()}` }
}

export function runAdapterDemo() {
  const adaptee = new Adaptee()
  const target: Target = new Adapter(adaptee)
  console.log(target.request())
}

if (require.main === module) runAdapterDemo()

