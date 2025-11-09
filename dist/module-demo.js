"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runModuleSingletonDemo = runModuleSingletonDemo;
const module_a_1 = require("./module-a");
const module_b_1 = require("./module-b");
function runModuleSingletonDemo() {
    console.log("모듈 단위 싱글톤 확인 (같은 id여야 함)");
    (0, module_a_1.useServiceA)();
    (0, module_b_1.useServiceB)();
}
