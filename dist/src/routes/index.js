"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ticket_controller_1 = require("../controllers/ticket.controller");
const categoria_controller_1 = require("../controllers/categoria.controller");
const subcategoria_controller_1 = require("../controllers/subcategoria.controller");
const tiketStatus_controller_1 = require("../controllers/tiketStatus.controller");
const router = (0, express_1.Router)();
router.use((req, res, next) => {
    console.log("Time: ", Date.now(), req.body);
    next();
    router.get("/", (req, res) => {
        res.send("Olá mundo teste");
    });
    //tiket
    router.get("/tiket", ticket_controller_1.getAllTiket);
    router.post("/tiket", ticket_controller_1.newTiket);
    //tiketStatus
    router.get("/tiketstatus", tiketStatus_controller_1.getAllTiketStatus);
    router.post("/tiketstatus", tiketStatus_controller_1.newTiketStatus);
    //categoria
    router.get("/categoria", categoria_controller_1.getAllCategory);
    router.post("/categoria", categoria_controller_1.newCategory);
    //subcategoria
    router.get("/subcategoria", subcategoria_controller_1.getAllSubcategory);
    router.post("/subcategoria", subcategoria_controller_1.newSubcategory);
});
exports.default = router;
//# sourceMappingURL=index.js.map