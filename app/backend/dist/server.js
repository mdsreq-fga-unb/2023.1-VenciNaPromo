"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.listen(3000, () => {
    console.log("Running on port 3000");
});
//# sourceMappingURL=server.js.map