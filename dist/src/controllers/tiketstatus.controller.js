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
exports.updateTiketStatus = exports.findOneTiketStatus = exports.getAllTiketStatus = exports.newTiketStatus = void 0;
const tiketStatus_repository_1 = require("../repositorys/tiketStatus.repository");
const newTiketStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tiketStatus = yield (0, tiketStatus_repository_1.create)(req.body);
        res.status(200).send(tiketStatus);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.newTiketStatus = newTiketStatus;
const getAllTiketStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tiketsStatus = yield (0, tiketStatus_repository_1.getAll)();
        console.log(tiketsStatus);
        res.status(200).send(tiketsStatus);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.getAllTiketStatus = getAllTiketStatus;
const findOneTiketStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tiketStatus = yield (0, tiketStatus_repository_1.getById)(Number(req.params.id));
        res.status(200).send(tiketStatus);
    }
    catch (error) {
        console.log(error);
    }
});
exports.findOneTiketStatus = findOneTiketStatus;
const updateTiketStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tiketStatus = yield (0, tiketStatus_repository_1.update)(Number(req.params.id), req.body);
        res.status(200).send(tiketStatus);
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateTiketStatus = updateTiketStatus;
//# sourceMappingURL=tiketStatus.controller.js.map