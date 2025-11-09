// Vue 데모에서 사용할 Lazy Singleton (브라우저 전용)
export class VueLazySingleton {
    static instance = null;
    constructor() {
        console.log("✅ Singleton 인스턴스가 생성되었습니다.");
    }
    static getInstance() {
        if (!VueLazySingleton.instance) {
            VueLazySingleton.instance = new VueLazySingleton();
        }
        return VueLazySingleton.instance;
    }
    hello() {
        console.log("안녕하세요! 저는 Singleton 인스턴스입니다 👋");
    }
}
