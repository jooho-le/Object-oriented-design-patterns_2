import { EagerSingleton } from "./singleton.eager.js";
import { StaticBlockSingleton } from "./singleton.static-block.js";
import { LazySingleton } from "./singleton.lazy.js";

function now() {
  return new Date().toISOString();
}

function runOnce() {
  // 미리 호출하여 eager/static 생성 로그 확인 (static은 import 시점에 이미 수행)
  EagerSingleton.getInstance().sayHello();
}

function runOnClick() {
  console.log(`[${now()}] 버튼 클릭으로 Singleton 사용!`);

  const e1 = EagerSingleton.getInstance();
  const e2 = EagerSingleton.getInstance();
  console.log("같은 인스턴스인가요?", e1 === e2);

  const s1 = StaticBlockSingleton.getInstance();
  const s2 = StaticBlockSingleton.getInstance();
  console.log("같은 인스턴스인가요?", s1 === s2);

  const l1 = LazySingleton.getInstance();
  const l2 = LazySingleton.getInstance();
  console.log("같은 인스턴스인가요?", l1 === l2);
}

document.addEventListener("DOMContentLoaded", () => {
  runOnce();
  const btn = document.getElementById("btn-test");
  btn?.addEventListener("click", runOnClick);
});
