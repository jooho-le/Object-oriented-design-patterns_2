// Eager Initialization: 클래스 로드 시점에 즉시 생성

class EagerSingleton {
  private static readonly instance: EagerSingleton = new EagerSingleton();
  private constructor() {}

  public static getInstance(): EagerSingleton {
    return EagerSingleton.instance;
  }

  public sayHello(): void {
    console.log("안녕하세요! 저는 싱글톤 인스턴스입니다 👋 (eager)");
  }
}

export function runEagerDemo(): void {
  const s1 = EagerSingleton.getInstance();
  const s2 = EagerSingleton.getInstance();
  s1.sayHello();
  console.log("같은 객체인가요?", s1 === s2);
}
