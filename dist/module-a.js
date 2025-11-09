"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useServiceA = useServiceA;
const service_1 = require("./service");
function useServiceA() {
    console.log("[A]", service_1.service.ping());
}
