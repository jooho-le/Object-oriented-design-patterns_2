// Observer Pattern demo

interface Observer { update(state: number): void }

class Subject {
  private observers = new Set<Observer>()
  private _state = 0

  get state() { return this._state }
  set state(v: number) { this._state = v; this.notify() }

  attach(o: Observer) { this.observers.add(o) }
  detach(o: Observer) { this.observers.delete(o) }
  notify() { for (const o of this.observers) o.update(this._state) }
}

class ConcreteObserver implements Observer {
  constructor(private name: string) {}
  update(state: number) { console.log(`${this.name} observed state=${state}`) }
}

export function runObserverDemo() {
  const s = new Subject()
  s.attach(new ConcreteObserver("A"))
  s.attach(new ConcreteObserver("B"))
  s.state = 1
  s.state = 2
}

if (require.main === module) runObserverDemo()

