"use strict";
// Eager Initialization: 클래스 로드 시점에 즉시 생성
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEagerDemo = runEagerDemo;
class EagerSingleton {
    static instance = new EagerSingleton();
    constructor() { }
    static getInstance() {
        return EagerSingleton.instance;
    }
    sayHello() {
        console.log("안녕하세요! 저는 싱글톤 인스턴스입니다 👋 (eager)");
    }
}
function runEagerDemo() {
    const s1 = EagerSingleton.getInstance();
    const s2 = EagerSingleton.getInstance();
    s1.sayHello();
    console.log("같은 객체인가요?", s1 === s2);
}
