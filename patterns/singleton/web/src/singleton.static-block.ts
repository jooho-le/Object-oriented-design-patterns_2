// Static block initialization (브라우저 데모용)

export class StaticBlockSingleton {
  private static instance: StaticBlockSingleton;
  private constructor() {}

  static {
    try {
      StaticBlockSingleton.instance = new StaticBlockSingleton();
      console.log("✅ Singleton 인스턴스가 생성되었습니다. (static block)");
    } catch {
      console.error("싱글톤 객체 생성 오류 (static block)");
    }
  }

  public static getInstance(): StaticBlockSingleton {
    return StaticBlockSingleton.instance;
  }

  public greet(): void {
    console.log("안녕하세요! 저는 static block으로 생성된 싱글톤입니다 👋");
  }
}
