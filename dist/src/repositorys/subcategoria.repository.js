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
exports.update = exports.getById = exports.getAll = exports.create = void 0;
const prisma_1 = require("../services/prisma");
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const subcategoria = yield prisma_1.prisma.subcategoria.create({
        data,
    });
    return subcategoria;
});
exports.create = create;
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const subcategoria = yield prisma_1.prisma.subcategoria.findMany({
        select: {
            id: true,
            name: true,
            color: true,
            categoria: {
                select: {
                    name: true,
                    color: true
                }
            }
        },
    });
    return subcategoria;
});
exports.getAll = getAll;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const categoria = yield prisma_1.prisma.categoria.findFirst({
        where: {
            id,
        },
    });
    return categoria;
});
exports.getById = getById;
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const categoria = yield prisma_1.prisma.categoria.update({
        where: {
            id,
        },
        data,
    });
    return categoria;
});
exports.update = update;
//# sourceMappingURL=subcategoria.repository.js.map