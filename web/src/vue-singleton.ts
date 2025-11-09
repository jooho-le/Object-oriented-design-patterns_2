// Vue 데모에서 사용할 Lazy Singleton (브라우저 전용)

export class VueLazySingleton {
  private static instance: VueLazySingleton | null = null;
  private constructor() {
    console.log("✅ Singleton 인스턴스가 생성되었습니다.");
  }
  public static getInstance(): VueLazySingleton {
    if (!VueLazySingleton.instance) {
      VueLazySingleton.instance = new VueLazySingleton();
    }
    return VueLazySingleton.instance;
  }
  public hello() {
    console.log("안녕하세요! 저는 Singleton 인스턴스입니다 👋");
  }
}

