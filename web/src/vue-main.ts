// 브라우저에서 CDN으로 Vue 3 ESM을 불러와 마운트
// TypeScript -> JS로 컴파일된 뒤, 동적 import는 그대로 동작합니다.

import { VueLazySingleton } from "./vue-singleton.js";

function now() {
  return new Date().toISOString();
}

async function mount() {
  const { createApp, ref } = await import(
    "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
  );

  const app = createApp({
    setup() {
      const title = ref("Vue + TypeScript Singleton Demo");
      const onClick = () => {
        // 사용 시점에 싱글톤 획득 및 로그 출력
        const s1 = VueLazySingleton.getInstance();
        s1.hello();

        console.log(`[${now()}] 버튼 클릭으로 Singleton 사용!`);
        const s2 = VueLazySingleton.getInstance();
        console.log("같은 인스턴스인가요?", s1 === s2);
      };
      return { title, onClick };
    },
    template: `
      <div class="wrap">
        <h1>{{ title }}</h1>
        <button id="btn" @click="onClick">Singleton 테스트</button>
      </div>
    `,
  });

  app.mount("#app");
}

// 초기 1회 메시지를 보고 싶다면 아래를 사용하세요.
// VueLazySingleton.getInstance().hello();

mount();

