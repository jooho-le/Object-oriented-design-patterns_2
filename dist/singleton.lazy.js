"use strict";
// Lazy Initialization: 최초 요청 시점에 생성
Object.defineProperty(exports, "__esModule", { value: true });
exports.runLazyDemo = runLazyDemo;
class LazySingleton {
    static instance = null;
    static creating = false; // 간단한 once 가드
    constructor() { }
    static getInstance() {
        if (LazySingleton.instance)
            return LazySingleton.instance;
        if (!LazySingleton.creating) {
            LazySingleton.creating = true;
            LazySingleton.instance = new LazySingleton();
            LazySingleton.creating = false;
        }
        return LazySingleton.instance;
    }
    say() {
        console.log("lazy로 생성된 싱글톤입니다 👋");
    }
}
function runLazyDemo() {
    const a = LazySingleton.getInstance();
    const b = LazySingleton.getInstance();
    console.log("같은 객체인가요?", a === b);
    a.say();
}
