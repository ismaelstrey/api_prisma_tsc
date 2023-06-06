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
exports.updateOneCategory = exports.findOneCategory = exports.getAllCategory = exports.newCategory = void 0;
const categoria_repository_1 = require("../repositorys/categoria.repository");
const newCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoria = yield (0, categoria_repository_1.createCategoria)(req.body);
        res.status(200).send(categoria);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.newCategory = newCategory;
const getAllCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categorias = yield (0, categoria_repository_1.getAll)();
        console.log(categorias);
        res.status(200).send(categorias);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.getAllCategory = getAllCategory;
const findOneCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoria = yield (0, categoria_repository_1.getById)(Number(req.params.id));
        res.status(200).send(categoria);
    }
    catch (error) {
        console.log(error);
    }
});
exports.findOneCategory = findOneCategory;
const updateOneCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoria = yield (0, categoria_repository_1.updateCategoria)(Number(req.params.id), req.body);
        res.status(200).send(categoria);
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateOneCategory = updateOneCategory;
//# sourceMappingURL=categoria.controller.js.map