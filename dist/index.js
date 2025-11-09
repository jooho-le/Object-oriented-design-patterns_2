"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singleton_eager_1 = require("./singleton.eager");
const singleton_static_block_1 = require("./singleton.static-block");
const singleton_lazy_1 = require("./singleton.lazy");
const module_demo_1 = require("./module-demo");
function main(mode) {
    switch (mode) {
        case "eager":
            console.log("\n=== Eager Initialization ===");
            (0, singleton_eager_1.runEagerDemo)();
            break;
        case "static":
            console.log("\n=== Static Block Initialization ===");
            (0, singleton_static_block_1.runStaticBlockDemo)();
            break;
        case "lazy":
            console.log("\n=== Lazy Initialization ===");
            (0, singleton_lazy_1.runLazyDemo)();
            break;
        case "module":
            console.log("\n=== Module-level Singleton ===");
            (0, module_demo_1.runModuleSingletonDemo)();
            break;
        case "all":
        default:
            console.log("\n=== Eager Initialization ===");
            (0, singleton_eager_1.runEagerDemo)();
            console.log("\n=== Static Block Initialization ===");
            (0, singleton_static_block_1.runStaticBlockDemo)();
            console.log("\n=== Lazy Initialization ===");
            (0, singleton_lazy_1.runLazyDemo)();
            console.log("\n=== Module-level Singleton ===");
            (0, module_demo_1.runModuleSingletonDemo)();
    }
}
const mode = process.argv[2] || "all";
main(mode);
