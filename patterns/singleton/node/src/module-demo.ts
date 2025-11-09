import { useServiceA } from "./module-a";
import { useServiceB } from "./module-b";

export function runModuleSingletonDemo(): void {
  console.log("모듈 단위 싱글톤 확인 (같은 id여야 함)");
  useServiceA();
  useServiceB();
}
