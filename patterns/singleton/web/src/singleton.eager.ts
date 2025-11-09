// Eager Initialization (브라우저 데모용)

export class EagerSingleton {
  private static readonly instance: EagerSingleton = new EagerSingleton();
  private constructor() {
    console.log("✅ Singleton 인스턴스가 생성되었습니다. (eager)");
  }
  public static getInstance(): EagerSingleton {
    return EagerSingleton.instance;
  }
  public sayHello(): void {
    console.log("안녕하세요! 저는 Singleton 인스턴스입니다 👋 (eager)");
  }
}
