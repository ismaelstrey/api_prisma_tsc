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
exports.updateOneSubcategory = exports.findOneSubcategory = exports.getAllSubcategory = exports.newSubcategory = void 0;
const subcategoria_repository_1 = require("../repositorys/subcategoria.repository");
const newSubcategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subcategoria = yield (0, subcategoria_repository_1.create)(req.body);
        res.status(200).send(subcategoria);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.newSubcategory = newSubcategory;
const getAllSubcategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subcategorias = yield (0, subcategoria_repository_1.getAll)();
        console.log(subcategorias);
        res.status(200).send(subcategorias);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.getAllSubcategory = getAllSubcategory;
const findOneSubcategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subcategoria = yield (0, subcategoria_repository_1.getById)(Number(req.params.id));
        res.status(200).send(subcategoria);
    }
    catch (error) {
        console.log(error);
    }
});
exports.findOneSubcategory = findOneSubcategory;
const updateOneSubcategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subcategoria = yield (0, subcategoria_repository_1.update)(Number(req.params.id), req.body);
        res.status(200).send(subcategoria);
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateOneSubcategory = updateOneSubcategory;
//# sourceMappingURL=subcategoria.controller.js.map