// Eager Initialization (브라우저 데모용)
export class EagerSingleton {
    static instance = new EagerSingleton();
    constructor() {
        console.log("✅ Singleton 인스턴스가 생성되었습니다. (eager)");
    }
    static getInstance() {
        return EagerSingleton.instance;
    }
    sayHello() {
        console.log("안녕하세요! 저는 Singleton 인스턴스입니다 👋 (eager)");
    }
}
