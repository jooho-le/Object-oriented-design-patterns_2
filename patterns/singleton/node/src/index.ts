import { runEagerDemo } from "./singleton.eager";
import { runStaticBlockDemo } from "./singleton.static-block";
import { runLazyDemo } from "./singleton.lazy";
import { runModuleSingletonDemo } from "./module-demo";

type Mode = "eager" | "static" | "lazy" | "module" | "all";

function main(mode: Mode) {
  switch (mode) {
    case "eager":
      console.log("\n=== Eager Initialization ===");
      runEagerDemo();
      break;
    case "static":
      console.log("\n=== Static Block Initialization ===");
      runStaticBlockDemo();
      break;
    case "lazy":
      console.log("\n=== Lazy Initialization ===");
      runLazyDemo();
      break;
    case "module":
      console.log("\n=== Module-level Singleton ===");
      runModuleSingletonDemo();
      break;
    case "all":
    default:
      console.log("\n=== Eager Initialization ===");
      runEagerDemo();
      console.log("\n=== Static Block Initialization ===");
      runStaticBlockDemo();
      console.log("\n=== Lazy Initialization ===");
      runLazyDemo();
      console.log("\n=== Module-level Singleton ===");
      runModuleSingletonDemo();
  }
}

const mode = (process.argv[2] as Mode) || "all";
main(mode);
