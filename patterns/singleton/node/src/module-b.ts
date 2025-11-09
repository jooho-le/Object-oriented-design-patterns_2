import { service } from "./service";

export function useServiceB(): void {
  console.log("[B]", service.ping());
}
