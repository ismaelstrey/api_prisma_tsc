"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ticket_controller_1 = require("../controllers/ticket.controller");
const router = (0, express_1.Router)();
router.use((req, res, next) => {
    console.log("Time: ", Date.now());
    next();
    router.get("/", (req, res) => {
        res.send("Olá mundo");
    });
    router.get("/tiket", ticket_controller_1.get);
});
exports.default = router;
//# sourceMappingURL=index.js.map