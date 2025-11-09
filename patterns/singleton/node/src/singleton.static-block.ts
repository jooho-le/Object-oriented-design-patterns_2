// Static block initialization (TS 4.4+ / target ES2022 이상 권장)

class StaticBlockSingleton {
  private static instance: StaticBlockSingleton;
  private constructor() {}

  static {
    try {
      StaticBlockSingleton.instance = new StaticBlockSingleton();
      console.log("✅ 싱글톤 인스턴스가 정상적으로 생성되었습니다. (static block)");
    } catch (_) {
      throw new Error("싱글톤 객체 생성 오류 (static block)");
    }
  }

  public static getInstance(): StaticBlockSingleton {
    return StaticBlockSingleton.instance;
  }

  public greet(): void {
    console.log("안녕하세요! 저는 static block으로 생성된 싱글톤입니다 👋");
  }
}

export function runStaticBlockDemo(): void {
  const s1 = StaticBlockSingleton.getInstance();
  const s2 = StaticBlockSingleton.getInstance();
  s1.greet();
  console.log("같은 객체인가요?", s1 === s2);
}
