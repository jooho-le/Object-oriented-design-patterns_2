import { service } from "./service";

export function useServiceA(): void {
  console.log("[A]", service.ping());
}
