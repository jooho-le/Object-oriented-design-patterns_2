// Lazy Initialization (브라우저 데모용)

export class LazySingleton {
  private static instance: LazySingleton | null = null;
  private static creating = false;
  private constructor() {}

  public static getInstance(): LazySingleton {
    if (LazySingleton.instance) return LazySingleton.instance;
    if (!LazySingleton.creating) {
      LazySingleton.creating = true;
      LazySingleton.instance = new LazySingleton();
      LazySingleton.creating = false;
      console.log("✅ Singleton 인스턴스가 생성되었습니다. (lazy)");
    }
    return LazySingleton.instance!;
  }

  public say(): void {
    console.log("lazy로 생성된 싱글톤입니다 👋");
  }
}
