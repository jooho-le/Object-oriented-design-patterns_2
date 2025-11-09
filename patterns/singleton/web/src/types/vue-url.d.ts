// 간단한 타입 셈(shim)으로 CDN URL 모듈을 any로 선언
declare module "https://unpkg.com/vue@3/dist/vue.esm-browser.js" {
  export const createApp: any;
  export const ref: any;
}
