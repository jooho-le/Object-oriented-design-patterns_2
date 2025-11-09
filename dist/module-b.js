"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useServiceB = useServiceB;
const service_1 = require("./service");
function useServiceB() {
    console.log("[B]", service_1.service.ping());
}
