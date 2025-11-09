// 모듈 단위 싱글톤: 모듈 캐시로 인해 사실상 단일 인스턴스

export class Service {
  readonly id = Math.random().toString(36).slice(2, 8);
  public ping() {
    return "pong:" + this.id;
  }
}

// 모듈이 한 번 로드되면 동일 인스턴스가 재사용됨
export const service = new Service();
