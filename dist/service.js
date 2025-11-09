"use strict";
// 모듈 단위 싱글톤: 모듈 캐시로 인해 사실상 단일 인스턴스
Object.defineProperty(exports, "__esModule", { value: true });
exports.service = exports.Service = void 0;
class Service {
    id = Math.random().toString(36).slice(2, 8);
    ping() {
        return "pong:" + this.id;
    }
}
exports.Service = Service;
// 모듈이 한 번 로드되면 동일 인스턴스가 재사용됨
exports.service = new Service();
