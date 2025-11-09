// Lazy Initialization: 최초 요청 시점에 생성

class LazySingleton {
  private static instance: LazySingleton | null = null;
  private static creating = false; // 간단한 once 가드
  private constructor() {}

  public static getInstance(): LazySingleton {
    if (LazySingleton.instance) return LazySingleton.instance;
    if (!LazySingleton.creating) {
      LazySingleton.creating = true;
      LazySingleton.instance = new LazySingleton();
      LazySingleton.creating = false;
    }
    return LazySingleton.instance!;
  }

  public say(): void {
    console.log("lazy로 생성된 싱글톤입니다 👋");
  }
}

export function runLazyDemo(): void {
  const a = LazySingleton.getInstance();
  const b = LazySingleton.getInstance();
  console.log("같은 객체인가요?", a === b);
  a.say();
}
