// Lazy Initialization (브라우저 데모용)
export class LazySingleton {
    static instance = null;
    static creating = false;
    constructor() { }
    static getInstance() {
        if (LazySingleton.instance)
            return LazySingleton.instance;
        if (!LazySingleton.creating) {
            LazySingleton.creating = true;
            LazySingleton.instance = new LazySingleton();
            LazySingleton.creating = false;
            console.log("✅ Singleton 인스턴스가 생성되었습니다. (lazy)");
        }
        return LazySingleton.instance;
    }
    say() {
        console.log("lazy로 생성된 싱글톤입니다 👋");
    }
}
