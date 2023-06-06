"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTiketId = exports.findOneTiket = exports.getAllTiket = exports.newTiket = void 0;
const tiket_repository_1 = require("../repositorys/tiket.repository");
const newTiket = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tiket = yield (0, tiket_repository_1.createTiket)(req.body);
        res.status(200).send(tiket);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.newTiket = newTiket;
const getAllTiket = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tikets = yield (0, tiket_repository_1.getAll)();
        console.log(tikets);
        res.status(200).send(tikets);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.getAllTiket = getAllTiket;
const findOneTiket = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tiket = yield (0, tiket_repository_1.getById)(Number(req.params.id));
        res.status(200).send(tiket);
    }
    catch (error) {
        console.log(error);
    }
});
exports.findOneTiket = findOneTiket;
const updateTiketId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tiket = yield (0, tiket_repository_1.updateTiket)(Number(req.params.id), req.body);
        res.status(200).send(tiket);
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateTiketId = updateTiketId;
//# sourceMappingURL=ticket.controller.js.map